import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div>
      {/* <h1>EJC APP</h1> */}
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/others">
          <a>Listing</a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
