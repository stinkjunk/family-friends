import Details from "@/components/Details";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import NotFound from "@/components/Notfound";

export default async function details({ params }) {
  const { id } = await params;


  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  console.log(product);
  //if id in url is not found in dummyjson, then redirect to notfound page
  if (
    !product ||
    product.message === "Product with id '${id}' not found" ||
    !product.id
  ) {
    return <NotFound missingPage={id} />;
  }

  return (
    <main>
      <Suspense
        fallback={
          <section className="px-7 pt-1 h-[calc(100vh-var(--headerHeight))] flex flex-col justify-center items-center">
            <Loading size={40} />
          </section>
        }
      >
        <Details details={product} />
      </Suspense>
    </main>
  );
}
