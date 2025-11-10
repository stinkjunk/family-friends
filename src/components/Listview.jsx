// "use client";

import data from "@/data/placeholder/placecats.json";
import ListItem from "./Listitem";
// import Masonry from "react-masonry-css";
import MasonryWrapper from "./MasonryWrapper";

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
    //sikkert virkelig uelegant...
    //kunne måske tænkes at en bedre måde ville være at
    //splitte "Millie & Neo" ved " & ", og så bygge derfra?
    //desværre er mine evner begrænsede, vel det samme med min
    //intelligens.
    filteredCats = cats;
  } else if (props.selected === "Millie") {
    filteredCats = cats.filter(
      (cat) => cat.name === "Millie" || cat.name === "Millie & Neo"
    );
  } else if (props.selected === "Neo") {
    filteredCats = cats.filter(
      (cat) => cat.name === "Neo" || cat.name === "Millie & Neo"
    );
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
    <MasonryWrapper //MasonryWrapper, da Masonry i sig selv har brug for "use client"
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
          imgName={cat.imgName}
          className="break-inside-avoid mb-4"
        />
      ))}
    </MasonryWrapper>
  );
};

export default ListView;
