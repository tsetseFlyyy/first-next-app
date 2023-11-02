import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "40px 0",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;
