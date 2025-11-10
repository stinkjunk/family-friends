"use client"

import Masonry from "react-masonry-css";

export default function MasonryWrapper({ children }) {
  return (
    //Masonry er en React-komponent som jeg har importeret for at lave et murstens-layout
    <Masonry
    className=""
    >
      {children}
    </Masonry>
  );
}