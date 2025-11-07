import Image from "next/image";

const ListItem = (props) => {
  return (
    <button className="
    rounded-[16px]  break-inside-avoid
    [box-shadow:0_4px_16px_0_rgba(19,_21,_68,_0.06)]
    cursor-pointer hover:[box-shadow:0_8px_24px_0_rgba(19,_21,_68,_0.12)]
    transition-all duration-200
    ">
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
      ></Image>
      <div className="m-4">
      <div className="flex">
        <div>
          <h4 className="text-lg font-bold">{props.name}</h4>
          <p className="opacity-40 font-medium text-left">{props.species}</p>
        </div>
        <p className="ml-auto mb-auto pl-4 opacity-40 font-medium">{props.age}</p>
      </div>
      {/* <p>{props.description}</p> */}
      </div>
    </button>
  );
};

export default ListItem;
