// import Image from "next/image";
import ListView from "@/components/Listview";
import FilterMenu from "@/components/Filtermenu";

export default function Home() {
  return (
    <main>
      <article>
        
        <FilterMenu/>
        <div className="px-7">
        <ListView />
        </div>
      </article>
    </main>
  );
}
