"use client";

// import Image from "next/image";
import ListView from "@/components/Listview";
import FilterMenu from "@/components/Filtermenu";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("All cats");

  return (
    <main>
      <article>
        <FilterMenu
        selected={selected}
        onSelect={(item) => setSelected(item)}
        />
        <div className="px-7">
          <ListView 
          selected={selected}
          />
        </div>
      </article>
    </main>
  );
}
