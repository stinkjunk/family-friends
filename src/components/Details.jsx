"use client";

import Image from "next/image";
import Link from "next/link";
import FavoriteBtn from "./Favoritebtn";
import { useState } from "react";
import { CgChevronLeft } from "react-icons/cg";

const Details = (props) => {
  const [favorited, setFavorited] = useState(false);
  const onClick = () => {
    setFavorited((prev) => !prev);
  };

  const addStyling = " w-10 h-10 ml-auto ";

  const detailStyling = "rounded-full px-5 py-1 ";
  const speciesStyling = "bg-[#ACD7FF] text-[#6B8B42;] ";
  const ageStyling = "bg-[#C5E59C] text-[#6B8B42;] ";

  let previewImage;
  if (props.details.species === "2 Cats") {
    previewImage = "https://placecats.com/millie_neo/50/50/";
  } else {
    previewImage = "https://placecats.com/bella/50/50/";
  }

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
      <div className="relative">
        <Image
          src={url}
          alt={props.details.name}
          width={size}
          height={size}
          className="rounded-[32px]"
          loading="eager"
          priority={true}
        ></Image>
        <div
          className="
          absolute top-0 left-0 h-full aspect-square
          flex p-6
          "
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
              <Image
                width={50}
                height={50}
                src={previewImage}
                alt={"Cats"}
                className="h-full w-auto object-cover scale-65 rounded-[10px] "
              ></Image>
              <p className="text-[rgba(255,255,255,0.90)] font-medium mr-auto pr-8 mt-2 ">
                {props.details.species}
              </p>
            </div>
          </div>
          <FavoriteBtn
            addStyling={addStyling}
            onClick={onClick}
            favorited={favorited}
          />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl mt-2 mb-4">
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
