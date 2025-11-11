// "use client";

import Image from "next/image";
import PastelImg from "./PastelImg";
import Link from "next/link";
import FavoriteBtn from "./Favoritebtn";
import { CgChevronLeft } from "react-icons/cg";

const Details = (props) => {
  const addStyling = " w-10 h-10 ml-auto ";

  const detailStyling = "rounded-full px-5 py-1 ";
  const speciesStyling = "bg-[#ACD7FF] text-[#6B8B42;] ";
  const ageStyling = "bg-[#C5E59C] text-[#6B8B42;] ";
  console.log("Category: ", props.details.category);
  const formattedCategory = props.details.category
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bMens\b/g, "Men's")
    .replace(/\bWomens\b/g, "Women's");
  console.log("formattedCategory: ", formattedCategory);


  const lastUpdated = new Date(props.details.meta.updatedAt).toLocaleDateString().replaceAll(".", "/");
  console.log("lastUpdated: ", lastUpdated);

  console.log("Kat detaljer: ", props.details);
  const size = 500;
  // const url =
  //   "https://placecats.com/" +
  //   props.details.imgName +
  //   "/" +
  //   size +
  //   "/" +
  //   size +
  //   "/";
  return (
    <section className="px-7 pt-1 min-h-[calc(100vh-var(--headerHeight))] flex flex-col">
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
            <Link
              className=" bg-[rgba(255,255,255,0.20)] backdrop-blur-[15px] rounded-[16px]  mt-auto flex h-10"
              href={"/?category=" + props.details.category}
            >
              <CgChevronLeft color="rgba(255,255,255,0.90)" className="my-auto pl-2 transform scale-[120%]" size={28}></CgChevronLeft>
              <p className="text-[rgba(255,255,255,0.90)] font-medium px-3 mr-2 my-auto ">
                {formattedCategory}
              </p>
            </Link>
          </div>
          <FavoriteBtn
            addStyling={addStyling}
            // onClick={}
            // favorited={}
          />
        </div>
        <PastelImg
          url={props.details.images[0]}
          name={props.details.title}
          width={size}
          height={size}
          id={props.details.id}
          style={"rounded-[32px] col-start-1 col-end-1 row-start-1 row-end-1"}
        ></PastelImg>
      </div>
      <div>
        <h1 className="font-bold text-2xl mt-4 mb-3">
          {/* {props.details.species} */} {props.details.title}
        </h1>
        <div className="flex gap-2 mb-3">
          <p className={detailStyling + speciesStyling}>
            {/* {props.details.species} */} Sample Text
          </p>
          {/* <p className={detailStyling + ageStyling}>{props.details.age} old</p> */}
        </div>
        <p className="font-medium">{props.details.description}</p>
        <p className="text-xs font-medium opacity-50 mt-2 mb-10">
          Last updated: {lastUpdated}
        </p>
      </div>
      <Link
        href=""
        className="mt-auto mb-8 font-medium py-5 text-center text-lg text-[var(--background)] bg-[var(--praimory)] rounded-full"
      >
        <span className="font-bold">Buy now</span>
      </Link>
    </section>
  );
};

export default Details;
