import Image from "next/image";
import Link from "next/link";

const Details = (props) => {
  const detailStyling = "rounded-full px-5 py-1 ";
  const speciesStyling = "bg-[#ACD7FF] text-[#6B8B42;] ";
  const ageStyling = "bg-[#C5E59C] text-[#6B8B42;] ";

  console.log("Kat detaljer: ", props.details);
  const size = 500;
  const url =
    "https://placecats.com/" +
    props.details.imgName +
    "/" +
    size +
    "/" +
    size +
    "/";
  return (
    <section className="px-7 h-[calc(100vh-var(--headerHeight))] flex flex-col">
      <div className="relative">
        <Image
          src={url}
          alt={props.details.name}
          width={size}
          height={size}
          className="rounded-[16px]"
          loading="eager"
        ></Image>
      </div>
      <div>
        <h1 className="font-bold text-2xl mt-2 mb-4">
          {props.details.species} {props.details.name}
        </h1>
        <div className="flex gap-2 mb-3">
          <p className={detailStyling + speciesStyling}>
            {props.details.species}
          </p>
          <p className={detailStyling + ageStyling}>{props.details.age}</p>
        </div>
        <p className="font-medium">{props.details.description}</p>
        <p className="text-xs font-medium opacity-50 mt-2">
          Last updated: {props.details.updated}
        </p>
      </div>
      <Link href="" className="mt-auto mb-8 font-medium py-5 text-center text-lg text-[var(--background)] bg-[var(--praimory)] rounded-full">
        <span className="font-bold">Adopt</span> {props.details.species} {props.details.name}
      </Link>
    </section>
  );
};

export default Details;
