import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

const data = [
  {
    title: "手机靓号免费",
    description: "手机靓号免费申请啦",
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.guguzhu.com%2Fd%2Ffile%2Fandroid%2Fico%2F2021%2F07%2F02%2For02hm1gpdi.png&refer=http%3A%2F%2Fimg.guguzhu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656510588&t=051085f51f4bbcb6164aca8f47d84eec",
    detail: "http://iot.liuketh.cn",
  },
  {
    title: "手机靓号精选",
    description: "精选手机靓号",
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.guguzhu.com%2Fd%2Ffile%2Fandroid%2Fico%2F2021%2F07%2F02%2For02hm1gpdi.png&refer=http%3A%2F%2Fimg.guguzhu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656510588&t=051085f51f4bbcb6164aca8f47d84eec",
    detail: "http://lh.liuketh.cn",
  },
  {
    title: "互联网卡",
    description: "互联网卡套餐精选",
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.guguzhu.com%2Fd%2Ffile%2Fandroid%2Fico%2F2021%2F07%2F02%2For02hm1gpdi.png&refer=http%3A%2F%2Fimg.guguzhu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656510588&t=051085f51f4bbcb6164aca8f47d84eec",
    detail: "https://card.xuankaba.com/t/0.x5bgrv",
  },
];

export default function Index() {
  return (
    <Layout
      title="随身wifi云路由手机靓号内部套餐卡互联网卡手机卡优惠套餐"
      description="2022年好用的随身wifi,云路由,手机靓号,内部套餐卡,互联网卡,手机卡优惠套餐免费申请办理啦"
    >
      <div className={styles.container}>
        {data.map((item) => (
          <div className={styles.card}>
            <a href={item?.detail} target={"_blank"}>
              <strong>{item?.title}</strong>
            </a>
            <br></br>
            <img src={item.img} />
            <p>{item?.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
