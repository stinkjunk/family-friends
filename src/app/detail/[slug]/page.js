import data from "@/data/placeholder/placecats.json";
import Link from "next/link";
import NotFound from "@/components/Notfound";

export async function generateStaticParams() {
  //return slug for each .imgName in placecats.json
  return data.map((cat) => ({
    slug: cat.imgName,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const cat = data.find((cat) => cat.imgName === slug);

  if (!cat) {
    return (
      // <section className="px-7">
      //   <h1 className="text-7xl font-thin">404</h1>
      //   <p className="mb-10">The page <span className="font-bold">"detail/{slug}"</span> was not found!</p>

      //   <Link href="/" className="underline text-blue-500">Go back to home</Link>
      // </section>
      <NotFound missingPage={"detail/" + slug} />
    );
  }

  return (
    <div className="px-7">
      <h1>Cat: {cat.imgName}</h1>
    </div>
  );
}
