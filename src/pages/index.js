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
  return (
    <Layout
      title="流量卡-物联卡-随身wifi-免费申请办理送激活充值教程"
      description="13年的行业领军者,为您提供靠谱稳定的流量卡、物联卡、随身wifi、手机靓号、话费9折充值、电信联通移动星卡、内部套餐卡等,免费办理申请,全程人工指导充值激活,省内流量卡买一送一,限时活动进行中,期待您的到来,售后服务终生无忧"
    >
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
