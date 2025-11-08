
import data from "@/data/placeholder/placecats.json";
import NotFound from "@/components/Notfound";
import Details from "@/components/Details";

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
      <NotFound missingPage={"detail/" + slug} />
    );
  }

  return (
    <Details
      details={cat}
    />
  );
}
