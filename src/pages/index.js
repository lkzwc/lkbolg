import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import styles from "./index.module.css";
import {
  HomepageFeaturesWhy,
  HomepageFeatures,
} from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div style={{ width: "40%" }}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
      <div>
        <img
          src={require("@site/static/img/index/earth.webp").default}
          alt="模型图"
          style={{ height: "320px", marginLeft: "200px" }}
        />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  console.log("---", siteConfig?.title);
  return (
    <Layout
    // title={`${siteConfig.title}`}
    // description="流客科技-万网之流，来着皆客。提供IOT全面服务，包括通信领域，物联网领域，流量卡领域，可进行手机卡办理，手机靓号办理，手机靓号155555、1555522、1555533、1314520靓号办理，手机话费9折充值，全国手机话费9折直冲，内部套餐卡办理！智能监控，智能联控等物联网服务"
    >
      <Head>
        <meta property="og:title" content={`${siteConfig.title}`} />
      </Head>
      <HomepageHeader />
      <main>
        <legend
          style={{
            fontSize: "2rem",
            height: "80px",
            padding: "3px 6px",
            textAlign: "center",
          }}
        >
          我们能为你提供什么？
        </legend>
        <HomepageFeatures />

        <legend
          style={{
            fontSize: "2rem",
            height: "80px",
            padding: "3px 6px",
            textAlign: "center",
          }}
        >
          为什么选择我们？
        </legend>
        <HomepageFeaturesWhy />
      </main>
    </Layout>
  );
}
