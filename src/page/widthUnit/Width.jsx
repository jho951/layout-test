import React from "react";
import Header from "../../components/header/Header";

export default function WidthUnit() {
  return (
    <main id='main'>
      <Header />
      <input type='area' style={{ width: "30%" }}></input>
      <input type='area' style={{ width: "30vw" }}></input>
      <input type='area' style={{ width: "30vh" }}></input>
      <input type='area' style={{ width: "30rem" }}></input>
      <input type='area' style={{ width: "30em" }}></input>
      <input type='area' style={{ width: "30px" }}></input>
    </main>
  );
}
