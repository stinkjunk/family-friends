import Image from "next/image";

const PastelImg = (props) => {
  const pastels = [
    "#f2968f",
    "#a7c0e0",
    "#b0e0b0",
    "#f0e0b0",
    "#c9b0e0",
    "#f0b0d0",
    "#f0c8a0",
    "#a0e0d0",
    "#e0d0f0",
    "#f0d0b0",
    "#f5c6c6",
    "#d4c0e0",
    "#b0e0e0",
    "#f0a7a7",
    "#f5e6d3",
    "#c0d0c0",
    "#a7d0e0",
    "#f0c0c0",
    "#c0c0f0",
    "#f0e6a0",
    "#a0e0c0",
    "#e0b7b7",
    "#b0d0f0",
    "#f0f0a0",
    "#d0b0e0",
  ];
  const idPastel = pastels[props.id % pastels.length];
  console.log("idPastel: ", idPastel);

  function getPastelColor(id) {
    const pastelColor = pastels[id % pastels.length];
    return pastelColor;
  }

  const pastelColor = getPastelColor(props.id);

  return (
    <Image
      src={props.url}
      alt={props.name}
      width={props.width}
      height={props.height}
      className={props.style}
      style={{
        aspectRatio: `${props.width}/${props.height}`,
        backgroundColor: pastelColor,
      }}
      loading="eager"
    ></Image>
  );
};

export default PastelImg;
