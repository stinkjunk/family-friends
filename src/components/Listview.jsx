import MasonryWrapper from "./MasonryWrapper";
import ListItem from "./Listitem";
import Link from "next/link";

const ListView = async (props) => {
  //https://dummyjson.com/products/
  console.log("props.selected: ", props.selected);
  const filteredCategory =
    props.selected === "all-categories" ? "" : props.selected;
  console.log("filteredCategory: ", filteredCategory);
  const url = filteredCategory
    ? `https://dummyjson.com/products/category/${props.selected}`
    : "https://dummyjson.com/products/";
  console.log("url: ", url);
  const response = await fetch(url);
  const products = await response.json();
  const items = products.products;
  console.log("Items (" + props.selected + "): ", items);

  return (
    <>
      <Link className="fixed z-100
      right-0
      bottom-0
      mr-7 mb-7 flex items-center justify-center rounded-full bg-[var(--praimory)] 
      hover:[box-shadow:0_8px_24px_0_rgba(19,_21,_68,_0.12)] transition-all duration-200
      text-[var(--color-background)] text-5xl h-15 w-15
      
      " href={"/addproduct"}>
        +
      </Link>
      <MasonryWrapper //MasonryWrapper, da Masonry i sig selv har brug for "use client"
      >
        {items.map((item, index) => (
          <ListItem
            key={`${item.title}-${index}`} // Et unikt "key" attribut er nødvendigt
            name={item.title}
            species={item.species}
            description={item.description}
            age={item.age}
            url={item.thumbnail}
            width={"500"} //500px
            height={"300"} //300px
            imgName={item.imgName}
            className="break-inside-avoid mb-4"
            id={item.id}
            returnTo={props.selected}
          />
        ))}
      </MasonryWrapper>
    </>
  );
};

export default ListView;
