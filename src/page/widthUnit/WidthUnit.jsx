import React from "react";
import Layout from "../../components/layout/Layout";

export default function WidthUnit() {
  return (
    <Layout>
      <input type='area' style={{ width: "30%" }}></input>
      <input type='area' style={{ width: "30vw" }}></input>
      <input type='area' style={{ width: "30vh" }}></input>
      <input type='area' style={{ width: "30rem" }}></input>
      <input type='area' style={{ width: "30em" }}></input>
      <input type='area' style={{ width: "30px" }}></input>
    </Layout>
  );
}
