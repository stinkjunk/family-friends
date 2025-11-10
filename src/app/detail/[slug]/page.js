import NotFound from "@/components/Notfound";
import Details from "@/components/Details";

// This will render on every request
export default async function Page({ params }) {
  const { slug } = params;

  const response = await fetch("https://dummyjson.com/products/");
  const products = await response.json();
  const items = products.products;

  const item = items.find((item) => item.imgName === slug);

  if (!item) {
    return <NotFound missingPage={"detail/" + slug} />;
  }

  return <Details details={item} />;
}
