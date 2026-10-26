/**
 * Main.jsx
 * This component renders the main content area of the website.
 *
 * EXERCISE 2: Replace the hardcoded product divs below with a reusable
 * ProductCard component. Steps:
 *   1. Create src/components/ProductCard.jsx with props: name, price, description
 *   2. Define a products array above this function
 *   3. Use .map() to render a <ProductCard /> for each product
 *   4. Remember to add a key prop to each card
 *
 * EXERCISE 4: Update this component to receive products as a prop from App.jsx
 *   instead of defining the array here.
 */

import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import type { Product } from "../types";
import Category from "./Category";
import Search from "./Search";

function Main() {
  const [searchResult, setSearchResult] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isSelected, setIsSelected] = useState("All");
  let filteredProducts =
    isSelected === "All"
      ? products
      : products.filter((element) => element.category === isSelected);
  filteredProducts =
    searchResult.length > 0
      ? filteredProducts.filter((element) =>
          element.title.toLowerCase().includes(searchResult),
        )
      : filteredProducts;

  let categories = [
    "All",
    ...new Set(
      products.map((element) => {
        console.log("element category: ", element.category);
        return element.category;
      }),
    ),
  ];
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setError("Failed to load products. Please try again.");
      }
    }
    fetchProducts();
  }, []);

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Section */}

      <section className="text-center mb-8">
        {error ? <p className="text-red-600">{error}</p> : null}
        <h2 className="text-2xl font-semibold text-blue-700">
          Welcome to Our Store!
        </h2>
        <p className="mt-4 text-gray-600">
          Discover our amazing products and enjoy exclusive deals.
        </p>
        <div>
          <div className="flex justify-center items-center gap-4 p-6">
            <Category
              setIsSelected={setIsSelected}
              isSelected={isSelected}
              categories={categories}
            />
            <Search setSearchResult={setSearchResult} />
          </div>
        </div>
      </section>
      {/* TODO (Exercise 2): Replace the hardcoded divs below with a .map() over
          a products array, rendering a <ProductCard /> for each item */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default Main;
