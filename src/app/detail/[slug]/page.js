import data from "@/data/placeholder/placecats.json";

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
      <>
        <p>404: {slug} not found</p>
      </>
    );
  }

  return (
    <div>
      <h1>Cat: {cat.imgName}</h1>
      
    </div>
  );
}
