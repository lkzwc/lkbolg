import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "应用广泛",
    Svg: require("@site/static/img/use.svg").default,
    description: (
      <>
        流量卡全国通用、流量卡不限速、不限流量卡、可以满足个人企业日常的使用，如有特殊需求可以定制！
      </>
    ),
  },
  {
    title: "一次合作，终身服务",
    Svg: require("@site/static/img/cooperation.svg").default,
    description: <>服务始于合作,一次成交,服务终身！</>,
  },
  {
    title: "24小时服务",
    Svg: require("@site/static/img/server.svg").default,
    description: <>我们为客户提供24H的服务,排除您在使用过程中遇到的疑难杂症</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
