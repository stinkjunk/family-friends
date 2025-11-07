import Image from "next/image";

const ListItem = (props) => {
  return (
    <article className="rounded-[16px]  break-inside-avoid">
      <Image
        src={props.url}
        alt={props.name}
        width={props.width}
        height={props.height}
        className={
          `relative w-full aspect-[` + props.width + "/" + props.height + `] rounded-[16px]`
        }
      ></Image>
      <div className="">
      <h4 className="text-[16px] font-bold">{props.name}</h4>
      <p className="">{props.species}</p>
      <p>{props.age}</p>
      <p>{props.description}</p>
      </div>
    </article>
  );
};

export default ListItem;
