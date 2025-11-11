"use client";

import LinktoOrignal from "./LinktoOrignal";
import { CgBell, CgInfo } from "react-icons/cg";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-background)] h-[var(--headerHeight)] px-7 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-extrabold text-xl text-black" id="header">
            DummyJSON Browser
          </h1>
        </Link>
        <div className="flex gap-3">
          <button>
            <CgInfo
              color="var(--dark)"
              size={28}
              className="cursor-pointer"
              onClick={() => setShow(!show)}
            ></CgInfo>
          </button>
          <div className="notif relative">
            <CgBell
              color="var(--dark)"
              size={28}
              className="cursor-pointer"
            ></CgBell>
          </div>
        </div>
      </header>
      <div id="headerSpacer" className="h-[var(--headerHeight)]"></div>
      {show && <LinktoOrignal close={() => setShow(!show)} />}
    </>
  );
};

export default Header;
