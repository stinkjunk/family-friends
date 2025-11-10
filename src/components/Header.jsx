import Link from "next/link";
import { CgBell } from "react-icons/cg";





const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-background)] h-[var(--headerHeight)] px-7 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-extrabold text-xl text-black" id="header">
            DummyJSON Browser
          </h1>
        </Link>
        <div className="notif relative">
        <CgBell color="var(--dark)" size={28} className="cursor-pointer"></CgBell>
        {/* TODO: Indsæt info-ikon */}
        </div>
      </header>
      <div id="headerSpacer" className="h-[var(--headerHeight)]"></div>
    </>
  );
};

export default Header;
