// "use client";

import Image from "next/image";
import Link from "next/link";
import FavoriteBtn from "./Favoritebtn";
import { CgChevronLeft } from "react-icons/cg";

const Details = (props) => {


  const addStyling = " w-10 h-10 ml-auto ";

  const detailStyling = "rounded-full px-5 py-1 ";
  const speciesStyling = "bg-[#ACD7FF] text-[#6B8B42;] ";
  const ageStyling = "bg-[#C5E59C] text-[#6B8B42;] ";

  let previewImage; //100x100 thumbnail

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
    <section className="px-7 pt-1 h-[calc(100vh-var(--headerHeight))] flex flex-col">
      <div className="inline-grid w-fit">
        <div
          className="
          grid-inherit 
          flex p-6 
          rounded-[32px]
          justify-self-center
          z-10
          col-start-1 col-end-1 row-start-1 row-end-1
          w-full
          "
          style={{ gridRow: "1", gridColumn: "1" }}
        >
          <div className="flex flex-col">
            <Link
              href={"/"}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-[var(--background)] mr-auto"
            >
              <CgChevronLeft
                color="#242424"
                className="
                transform
                translate-x-[-5%]
                scale-[110%]
                "
                size={28}
              ></CgChevronLeft>
            </Link>
            <div className=" bg-[rgba(255,255,255,0.20)] backdrop-blur-[15px] rounded-[16px]  mt-auto flex h-14">
              {/* <Image
                width={100}
                height={100}
                src={"dummy"}
                alt={"dummy"}
                className="h-full w-auto object-cover scale-65 rounded-[10px] "
              ></Image>
              <p className="text-[rgba(255,255,255,0.90)] font-medium mr-auto pr-8 mt-2 ">
                {props.details.species}
              </p> */}
            </div>
          </div>
          <FavoriteBtn
            addStyling={addStyling}
            // onClick={}
            // favorited={}
          />
        </div>
        <Image
          src={url}
          alt={props.details.name}
          width={size}
          height={size}
          loading="eager"
          priority={true}
          className="rounded-[32px] col-start-1 col-end-1 row-start-1 row-end-1"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl mt-4 mb-3">
          {props.details.species} {props.details.name}
        </h1>
        <div className="flex gap-2 mb-3">
          <p className={detailStyling + speciesStyling}>
            {props.details.species}
          </p>
          <p className={detailStyling + ageStyling}>{props.details.age} old</p>
        </div>
        <p className="font-medium">{props.details.description}</p>
        <p className="text-xs font-medium opacity-50 mt-2">
          Last updated: {props.details.updated}
        </p>
      </div>
      <Link
        href=""
        className="mt-auto mb-8 font-medium py-5 text-center text-lg text-[var(--background)] bg-[var(--praimory)] rounded-full"
      >
        <span className="font-bold">Adopt</span> {props.details.species}{" "}
        {props.details.name}
      </Link>
    </section>
  );
};

export default Details;
