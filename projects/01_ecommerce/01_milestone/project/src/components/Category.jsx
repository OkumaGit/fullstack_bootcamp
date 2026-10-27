// import { useContext } from "react";
// import { CartContext } from "../App";

function Category({ categories, isSelected, setIsSelected }) {
  //   const { cart } = useContext(CartContext);

  return (
    <>
      {categories.map((element) => {
        return (
          <button
            onClick={() => {
              setIsSelected(element);
              // setIsSelected(!isSelected);
            }}
            className={`capitalize ... cursor-pointer rounded-full  px-5 py-2 text-sm leading-5 font-semibold ${isSelected ? "bg-blue-100 text-black hover:text-white hover:bg-blue-500" : "bg-blue-500 text-black hover:text-white hover:bg-blue-500"} `}
            key={element}
          >
            {element}
          </button>
        );
      })}
    </>
  );
}

export default Category;
