// import Image from "next/image";
import Link from "next/link";
import FavoriteBtn from "./Favoritebtn";
import PastelImg from "./PastelImg";
// import { useState } from "react";

const ListItem = async (props) => {
  const awaitedProps = await props;
  const addStyling = " w-10 scale-85 z-10 absolute top-4 right-1 ";
  //scale var før scale-70 for at følge figmaen, men
  //en større knap er nemmere at trykke på mobil.
  //Før var: top-3, right-0, scale-70

  return (
    <>
      <div className="relative">
        <FavoriteBtn
          // onClick={onClick}
          // favorited={favorited}
          addStyling={addStyling}
        />
      </div>
      <Link
        href={"/details/" + props.id} //<----???
        className="
        rounded-[16px]  break-inside-avoid
        [box-shadow:0_4px_16px_0_rgba(19,_21,_68,_0.06)]
        cursor-pointer hover:[box-shadow:0_8px_24px_0_rgba(19,_21,_68,_0.12)]
        transition-all duration-200
        "
      >
        <PastelImg
          url={awaitedProps.url}
          name={awaitedProps.name}
          width={awaitedProps.width}
          height={awaitedProps.height}
          id={awaitedProps.id}
          style={"relative w-full rounded-[16px] object-contain"}
        />

        <div className="m-4">
          <div className="flex">
            <div>
              <h4 className="text-lg font-bold">{props.name}</h4>
              <p className="opacity-40 font-medium text-left">
                {props.species}
              </p>
            </div>
            <p className="ml-auto mb-auto pl-4 opacity-40 font-medium">
              {props.age} old
            </p>
          </div>
          {/* <p>{props.description}</p> */}
        </div>
      </Link>
    </>
  );
};

export default ListItem;
