"use client";
import Image from "next/image";
import data from "@/data/placeholder/placecats.json";
import { useState } from "react";
//kode som returnerer et array for hvert unikt "name: value" i placeholder.json
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

const FilterMenu = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex-shrink-0 inline-flex h-12 overflow-x-auto overflow-y-hidden scrollbar-hide gap-3 px-7 py-0.5">
      {console.log("nameArray: ", nameArray)}
      {nameArray.map((item, index) => {
        const applyStyle =
          selected === index ? filterItemSelectedStyle : filterItemStyle;
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
            onClick={() => setSelected(index)}
          >
            <Image
              src={url}
              alt={item.name}
              width={size}
              height={size}
              className="rounded-full scale-60"
              loading="eager"
            />
            <p className={`mr-auto pr-2 font-medium ${applyStyle.text}`}>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FilterMenu;
