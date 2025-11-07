"use client";

import data from "@/data/placeholder/placecats.json";
import ListItem from "./Listitem";
import Masonry from "react-masonry-css";

//Placeholder data, indtil adgang fås til pefinder's API
const width = "500";
const height = "400";
const url = "https://placecats.com/";
// const cats = [...data].sort(() => Math.random() - 0.5); //Placeholder data blandes i tilfældig orden
// Randomisering ikke brugt da den skabnte synkronisitetsproblemer mellem klient og server

const cats = [...data];
//

const ListView = () => {
  console.log("Cats (Randomized): ", cats);
  return (
    <div>
      <Masonry
        breakpointCols={{ default: 4, 1024: 3, 768: 2, 480: 1 }}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {cats.map((cat, index) => (
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
    </div>
  );
};

export default ListView;
