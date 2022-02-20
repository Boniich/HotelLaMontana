import React from "react";
import "./Home.css";
import { TitleAndDescription } from "../../common/titleAndDescription/TitleAndDescription";
import Menu from "./menu/Menu";

export default function Home() {
  return (
    <div className="container">
      <TitleAndDescription
        title="Home"
        description="Selecciona la comida perfecta para ti!"
      />
      <section className="flex-box">
        <Menu />
      </section>
    </div>
  );
}
