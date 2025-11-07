import Image from "next/image";

const ListItem = (props) => {
  return (
    <div>
      <Image
        src={props.url}
        alt={props.name}
        width={props.width}
        height={props.height}
        className={
          `relative w-full aspect-[` + props.width + "/" + props.height + `]`
        }
      ></Image>
      <h4 className="">{props.name}</h4>
      <p className="">{props.description}</p>
    </div>
  );
};

export default ListItem;
