import Link from "next/link";

const NotFound = (props) => {
  return (
      <section className="px-7">
        <h1 className="text-7xl font-thin">404</h1>
        <p className="mb-10">The page <span className="font-bold">"{props.missingPage}"</span> was not found!</p>

        <Link href="/" className="underline text-blue-500">Go back to home</Link>
      </section>
  );
};

export default NotFound;