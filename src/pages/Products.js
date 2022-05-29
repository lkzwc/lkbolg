import React from "react";
import Layout from "@theme/Layout";

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          123132 Edit <code>pages/Products.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}
