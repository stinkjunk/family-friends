"use client";

import data from "@/data/placeholder/placecats.json";
import ListItem from "./Listitem";
import Masonry from "react-masonry-css";

//Placeholder data, indtil adgang fås til pefinder's API
const width = "500";
const height = "350";
const url = "https://placecats.com/";
// const cats = [...data].sort(() => Math.random() - 0.5); //Placeholder data blandes i tilfældig orden
// Randomisering ikke brugt da den skabnte synkronisitetsproblemer mellem klient og server

const cats = [...data];
//

const ListView = (props) => {
  let filteredCats = [];
  if (props.selected === "All cats") {
    filteredCats = cats;
  } else if (props.selected === "Millie & Neo") {
    filteredCats = cats.filter(
      (cat) =>
        cat.name === "Millie" ||
        cat.name === "Neo" ||
        cat.name === "Millie & Neo"
    );
  } else {
    filteredCats = cats.filter((cat) => cat.name === props.selected);
  }

  return (
    <Masonry //Masonry er en React-komponent som jeg har importeret for at lave et murstens-layout
      breakpointCols={{ default: 4, 1024: 3, 768: 2 }}
      className="flex gap-3 my-7"
      columnClassName="flex flex-col gap-3"
    >
      {filteredCats.map((cat, index) => (
        <ListItem
          key={`${cat.name}-${index}`} // Et unikt "key" attribut er nødvendigt
          name={cat.name}
          species={cat.species}
          description={cat.description}
          age={cat.age}
          url={url + cat.imgName + `/${width}/${height}/`}
          width={width}
          height={height}
          className="break-inside-avoid mb-4"
        />
      ))}
    </Masonry>
  );
};

export default ListView;
