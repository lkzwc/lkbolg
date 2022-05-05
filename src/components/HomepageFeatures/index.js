import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "流量卡",
    img: require("@site/static/img/index/card.png").default,
    description: (
      <>
        流量卡全国通用、流量卡不限速、不限流量卡、可以满足个人企业日常的使用，如有特殊需求可以定制！
      </>
    ),
  },
  {
    title: "随身wifi",
    img: require("@site/static/img/index/wifi.png").default,
    description: (
      <>全程高速，支持三网切换，可插拔、可带充电宝，最大支持8000毫安电池</>
    ),
  },
  {
    title: "内部套餐卡",
    img: require("@site/static/img/index/vip.png").default,
    description: (
      <>
        营业厅永远无法办理的套餐，绝版手机套餐、保号套餐、低月租、优惠套餐等等
      </>
    ),
  },
];

const FeatureListWhy = [
  {
    title: "应用广泛",
    Svg: require("@site/static/img/index/use.svg").default,
    description: <>可以面向各种设备使用，手机、电脑、车机等等</>,
  },
  {
    title: "一次合作，终身服务",
    Svg: require("@site/static/img/index/cooperation.svg").default,
    description: <>服务始于合作,一次成交,服务终身！</>,
  },
  {
    title: "24小时服务",
    Svg: require("@site/static/img/index/server.svg").default,
    description: <>提供24H售后服务,为您保驾护航</>,
  },
];

function Feature({ Svg, img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={img} width={{ width: "50px" }} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function HomepageFeatures() {
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

export function HomepageFeaturesWhy() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureListWhy.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
