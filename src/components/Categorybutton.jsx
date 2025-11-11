"use client";

import { useRouter } from "next/navigation";

const filterItemStyle = {
  box: "outline outline-solid outline-[#CACACD]",
  text: "text-[#33333366]",
};
const filterItemSelectedStyle = {
  box: "bg-[color:var(--praimory)]",
  text: "text-[var(--color-background)]",
};

const CategoryButton = (props) => {
  const router = useRouter();
  const applyStyle =
    props.searchParams === props.rawCategory ? filterItemSelectedStyle : filterItemStyle;

  return (
    <button
      className={`flex-shrink-0 rounded-full flex items-center cursor-pointer ${applyStyle.box}`}
      title={props.categoryName}
      onClick={() => {
        console.log(`Category "${props.rawCategory}" clicked.`);
        router.push(`?category=${props.rawCategory}`);
      }}
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
        {props.categoryName}
      </p>
    </button>
  );
};

export default CategoryButton;
