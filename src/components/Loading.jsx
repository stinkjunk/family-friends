import { CgSpinnerTwo } from "react-icons/cg";

export default function Loading(props) {
  return (
      <CgSpinnerTwo size={props.size} color="var(--dark)" className="animate-spin" />
  );
}

