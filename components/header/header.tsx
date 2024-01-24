import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Link className="link" href={ROUTER.HOME}>
        Home
      </Link>
      <Link className="link" href={ROUTER.ABOUT}>
        About
      </Link>
      <Link className="link" href={ROUTER.CONTACT}>
        Contact
      </Link>
    </header>
  );
};
export default Header;
