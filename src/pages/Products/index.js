import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
export default function Index() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div className={styles.container}>
        <div className={styles.card}>
          <a href="/blog/wifi">
            <strong>随身wifi</strong>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula.
          </p>
        </div>
        <div className={styles.card}>
          <a href="/blog/cloudnet">
            <strong>云路由</strong>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula.
          </p>
        </div>
        <div className={styles.card}>
          <a href="/blog/number">
            <strong>手机靓号</strong>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula.
          </p>
        </div>
        <div className={styles.card}>
          <a href="/blog/innercard">
            <strong>内部套餐卡</strong>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula.
          </p>
        </div>
        <div className={styles.card}>
          <a href="/blog/netcard">
            <strong>互联网卡</strong>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula.
          </p>
        </div>
      </div>
    </Layout>
  );
}
