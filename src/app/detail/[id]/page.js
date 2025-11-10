//sænd id med i link, hence slug = [id]

import NotFound from "@/components/Notfound";
import Details from "@/components/Details";
import { Suspense } from "react";

export default async function details({ params }) {
  const { id } = await params;
  const response = await fetch("https://dummyjson.com/products/" + id);
  const products = await response.json();

  // const item = items.find((item) => item.id === id);

  // if (!item) {
  //   <Suspense>
  //     return <NotFound missingPage={"detail/" + id} />;
  //   </Suspense>;
  // }

  return (
    <Suspense>
      <Details /* details={item} */ />
    </Suspense>
  );
}
