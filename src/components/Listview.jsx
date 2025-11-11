import MasonryWrapper from "./MasonryWrapper";
import ListItem from "./Listitem";

const ListView = async (props) => {


  const response = await fetch("https://dummyjson.com/products/");
  const products = await response.json();
  const items = products.products;
  console.log(items);

  return (
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
        />
      ))}
    </MasonryWrapper>
  );
};

export default ListView;
