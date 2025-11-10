"use client";

import Masonry from "react-masonry-css";

export default function MasonryWrapper({ children }) {
  return (
    //Masonry er en React-komponent som jeg har importeret for at lave et murstens-layout
    <Masonry
      breakpointCols={{ default: 4, 1024: 3, 768: 2 }}
      className="flex gap-3 my-7"
      columnClassName="flex flex-col gap-3"
    >
      {children}
    </Masonry>
  );
}
