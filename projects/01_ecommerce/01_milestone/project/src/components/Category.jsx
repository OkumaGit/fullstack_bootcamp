// import { useContext } from "react";
// import { CartContext } from "../App";

function Category({ categories, isSelected, setSelected }) {
  //   const { cart } = useContext(CartContext);

  return (
    <div className="flex justify-center items-center gap-4 p-6">
      {categories.map((element) => {
        return (
          <button
            onClick={() => {
              setSelected(element);
            }}
            className="capitalize ... cursor-pointer rounded-full  px-5 py-2 text-sm leading-5 font-semibold bg-blue-100 text-black hover:text-white hover:bg-blue-500"
            key={element}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
