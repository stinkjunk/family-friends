import Details from "@/components/Details";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import NotFound from "@/components/Notfound";

// async function FetchProduct({ params }) {
//   const { id } = await params;
//   const response = await fetch(`https://dummyjson.com/products/${id}`);
//   const product = await response.json();
//   console.log(id);

//   return (
//     <div className="flex justify-center">
//       <Image
//         loading="eager"
//         alt={product.brand ? product.brand : "Product Image"}
//         src={product.thumbnail}
//         width={300}
//         height={200}
//       />
//     </div>
//   );
// }

// export default function details({ params }) {
//   return (
//     <main>
//       <Suspense
//         fallback={
//           <section className="px-7 pt-1 h-[calc(100vh-var(--headerHeight))] flex flex-col justify-center items-center">
//             <Loading size={40} />
//           </section>
//         }
//       >
//         {/* <Details
//           id={params.id}
//         /> */}
//       </Suspense>
//     </main>
//   );
// }

export default async function details({ params }) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  console.log(product);
  //if id in url is not found in dummyjson, then redirect to notfound page
  if (!product || product.message === "Product with id '${id}' not found" || !product.id) {
    return <NotFound
    missingPage={id}
    />;
  }

  return (
    <main>

      <Suspense
        fallback={
          <section className="px-7 pt-1 h-[calc(100vh-var(--headerHeight))] flex flex-col justify-center items-center">
            <Loading
             size={40}
            />
          </section>
        }
      >
        <Details

          details={product}
        />

      </Suspense>
    </main>
  );
}
