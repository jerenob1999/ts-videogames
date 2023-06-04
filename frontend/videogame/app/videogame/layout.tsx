import React from "react";
import "./videogame-layout.css"

export default function VideogameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="videogame-layout">{children}</div>;
}
