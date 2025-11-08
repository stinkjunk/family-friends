import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ListItem = (props) => {
  const [favorited, setFavorited] = useState(false);
  return (
    <>
      <div className="relative">
        <button 
        //scale var før scale-70 for at følge figmaen, men
        //en større knap er nemmere at trykke på mobil.
        //Før var: top-3, right-0, scale-70
          className="
        cursor-pointer
          w-10
          aspect-square
          z-10
          absolute
          top-4
          right-1
          rounded-full
          p-2
          text-[var(--color-background)]
          scale-85
          backdrop-blur-[20px]
          bg-[rgba(150,146,146,0.25)];
          hover:[box-shadow:0_8px_24px_0_rgba(19,_21,_68,_0.12)]
          transition-box-shadow duration-200
        "
          onClick={() => setFavorited((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={favorited ? "var(--background)" : "none"}
            viewBox="0 0 1024 1024"
            className="icon"
            stroke="var(--background)"
            strokeWidth="60"
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
        </button>
      </div>
      <Link
        href="/detail"
        className="
    rounded-[16px]  break-inside-avoid
    [box-shadow:0_4px_16px_0_rgba(19,_21,_68,_0.06)]
    cursor-pointer hover:[box-shadow:0_8px_24px_0_rgba(19,_21,_68,_0.12)]
    transition-all duration-200
    "
      >
        <Image
          src={props.url}
          alt={props.name}
          width={props.width}
          height={props.height}
          className={
            `relative w-full aspect-[` +
            props.width +
            "/" +
            props.height +
            `] rounded-[16px]`
          }
          loading="eager"
        ></Image>
        <div className="m-4">
          <div className="flex">
            <div>
              <h4 className="text-lg font-bold">{props.name}</h4>
              <p className="opacity-40 font-medium text-left">
                {props.species}
              </p>
            </div>
            <p className="ml-auto mb-auto pl-4 opacity-40 font-medium">
              {props.age}
            </p>
          </div>
          <p>{props.description}</p>
        </div>
      </Link>
    </>
  );
};

export default ListItem;
