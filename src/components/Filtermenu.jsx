"use client";
import Image from "next/image";
const size = "50";
const nameArray = [
  { name: "All cats", imgName: "millie_neo" },
  ...Array.from(
    new Map([...data].reverse().map((item) => [item.name, item])).values()
  ).reverse(),
];

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

const FilterMenu = (props) => {
  // const [selected, setSelected] = useState("All cats");

  return (
    <div className="grid grid-flow-col auto-cols-max gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide py-0.75 pl-7 pr-7">
      {" "}
      {console.log("nameArray: ", nameArray)}
      {nameArray.map((item, index) => {
        const applyStyle =
          props.selected === item.name
            ? filterItemSelectedStyle
            : filterItemStyle;
        const url =
          "https://placecats.com/" +
          item.imgName +
          "/" +
          size +
          "/" +
          size +
          "/";
        console.log("url for item no." + index + ": " + url);

        return (
          <div
            key={index}
            className={`flex-shrink-0 rounded-full flex items-center cursor-pointer ${applyStyle.box}`}
            title={item.name}
            onClick={() => props.onSelect(item.name)}
          >
            <Image
              src={url}
              alt={item.name}
              width={size}
              height={size}
              className="rounded-full scale-60"
              loading="eager"
            />
            <p className={`mr-auto pr-4 font-medium ${applyStyle.text}`}>
              {item.name}
            </p>
          </div>
        );
      })}
      {/* <div className="w-7"></div> */}
    </div>
  );
};

export default FilterMenu;
