import Image from "next/image";
const size = "50";

const filterItemStyle = {
  box: "outline outline-solid outline-[#CACACD]",
  text: "text-[#33333366]",
};
const filterItemSelectedStyle = {
  box: "bg-[color:var(--praimory)]",
  text: "text-[var(--color-background)]",
};

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
          .replace(/\b\w/g, (char) => char.toUpperCase());
        const applyStyle =
          /* props.selected === item.name
            ? filterItemSelectedStyle
            : filterItemStyle */
          filterItemStyle;
        // const url =
        //   "https://placecats.com/" +
        //   item.imgName +
        //   "/" +
        //   size +
        //   "/" +
        //   size +
        //   "/";
        // console.log("url for item no." + index + ": " + url);

        return (
          <div
            key={index}
            className={`flex-shrink-0 rounded-full flex items-center cursor-pointer ${applyStyle.box}`}
            title={formattedCategory}
            // onClick={() => props.onSelect(item.name)}
          >
            {/* <Image
              src={url}
              alt={item.name}
              width={size}
              height={size}
              className="rounded-full scale-60"
              loading="eager"
            /> */}
            <p className={`px-4 py-2 font-medium ${applyStyle.text}`}>
              {formattedCategory}
            </p>
          </div>
        );
      })}
      {/* <div className="w-7"></div> */}
    </div>
  );
};

export default FilterMenu;
