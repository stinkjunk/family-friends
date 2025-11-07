"use client";

import data from "@/data/placeholder/placecats.json";
import ListItem from "./Listitem";

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
      <section id="listView" className="gap-4 columns-2 md:columns-3 xl:columns-4">
        {cats.map((cat, index) => (
          <ListItem
            key={`${cat.name}-${index}`} // Et unikt "key" attribut er nødvendigt
            name={cat.name}
            description={cat.species}
            age={cat.age}
            url={url + cat.imgName + `/${width}/${height}/`}
            width={width}
            height={height}
            className="break-inside-avoid mb-4"
          />
        ))}
      </section>
    </div>
  );
};

export default ListView;
