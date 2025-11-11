// "use client";

// import Image from "next/image";
import ListView from "@/components/Listview";
import FilterMenu from "@/components/Filtermenu";
import { Suspense } from "react";
import Loading from "@/components/Loading";
// import { useState } from "react";

export default function Home({ searchParams }) {
  return (
    <main>
      {/* <Suspense
        fallback={
          <section className="px-7 pt-1 h-[calc(100vh-var(--headerHeight))] flex flex-col justify-center items-center">
            <Loading size={40} />
          </section>
        }
      > */}
        <ProductListContainer searchParams={searchParams} />
        {/* <article>
          <FilterMenu
          // selected={selected}
          // onSelect={(item) => setSelected(item)}
          />
          <div className="px-7">
            <ListView
            // selected={selected}
            />
          </div>
        </article> */}
      {/* </Suspense> */}
    </main>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  console.log("searchParams: ", category);
  return (
    <Suspense
      fallback={
        <section className="px-7 pt-1 h-[calc(100vh-var(--headerHeight))] flex flex-col justify-center items-center">
          <Loading size={40} />
        </section>
      }
    >
      <article>
        <FilterMenu
          selected={category}
          // onSelect={(item) => setSelected(item)}
        />
        <div className="px-7">
          <ListView
          selected={category}
          />
        </div>
      </article>
    </Suspense>
  );
}
