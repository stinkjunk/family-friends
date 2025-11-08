
import data from "@/data/placeholder/placecats.json";
import NotFound from "@/components/Notfound";
import Details from "@/components/Details";

export async function generateStaticParams() {
  //return slug for each .imgName in placeanimals.json
  return data.map((animal) => ({
    slug: animal.imgName,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const animal = data.find((animal) => animal.imgName === slug);

  if (!animal) {
    return (
      <NotFound missingPage={"detail/" + slug} />
    );
  }

  return (
    <Details
      details={animal}
    />
  );
}
