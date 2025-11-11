import Link from "next/link";
import { CgClose } from "react-icons/cg";

const LinktoOrignal = ({ close }) => {
  return (
    <div className="absolute h-full w-full flex backdrop-blur-[20px] bg-[rgba(150,146,146,0.25)] z-1000">
      <div className="m-auto bg-white p-6 rounded-2xl shadow-lg relative mx-10 translate-y-[calc(var(--headerHeight)*-1)]">
        <CgClose
          className="absolute top-4 right-4 cursor-pointer"
          size={24}
          onClick={close}
        />
        <h2 className="pt-5 pb-3 font-bold text-2xl">OBS!</h2>
        <p className="pb-5">
          Da vi aldrig fik adgang til det API vi skulle bruge, så lavede jeg
          originalt denne side med en hjemmelavet database. Denne version bruger
          dummyjson API'et, men du kan stadig se den orginale jeg havde lavet
          herunder:
        </p>
        <span className="text-blue-500 text-lg"> </span>

        <Link
          href="https://family-friends-git-master-sjks-projects-295442e1.vercel.app/"
          target="_blank"
          className="text-blue-500 text-lg"
        >
          {"> "}
          <span className="underline">Gå til originalsiden</span>
        </Link>
      </div>
    </div>
  );
};

export default LinktoOrignal;
