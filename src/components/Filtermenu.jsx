import CategoryButton from "./Categorybutton";
import Image from "next/image";
const size = "50";



// uden ... fås et nestet array:
// const b = [0, a, 4]; // → [0, [1,2,3], 4]
// med ... "spredes" arrayet ud i det ydre array:
// const b = [0, ...a, 4]; // → [0, 1, 2, 3, 4]

const FilterMenu = async (props) => {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const fetchedCategories = await response.json();
  const categories = ["all-categories", ...fetchedCategories];
  console.log(categories);

  return (
    <div className="grid grid-flow-col auto-cols-max gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide py-0.75 pl-7 pr-7">
      {categories.map((category, index) => {
        const formattedCategory = category
          .replaceAll("-", " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
          .replace(/\bMens\b/g, "Men's")
          .replace(/\bWomens\b/g, "Women's");
        return (
          <CategoryButton
            searchParams={props.selected}
            categoryName={formattedCategory}
            rawCategory={category}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FilterMenu;
