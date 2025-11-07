import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1 className="font-extrabold">FamilyFriends</h1>
      </Link>
    </header>
  );
};

export default Header;
