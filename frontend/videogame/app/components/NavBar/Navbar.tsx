import React from "react";
import { Route } from "../../models/routes.model";
import Link from "next/link";
import "./Navbar.css"


interface Props {
  pathNames: Route[];
}

function Navbar({ pathNames }: Props) {
  return (
    <div className="navbar">
      {pathNames.map((pathname) => (
        <Link className="link" key={pathname.path} href={pathname.path}>{pathname.name}</Link>
      ))}
    </div>
  );
}

export default Navbar;
