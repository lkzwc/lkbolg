// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "流量卡官网-流量卡办理申请激活-物联卡激活办理免费申请-流客科技官网",
  tagline:
    "流客科技-万网之流，来着皆客。提供IOT全面服务，包括通信领域，物联网领域，流量卡领域，可进行手机卡办理，手机靓号办理，手机靓号155555、1555522、1555533、1314520靓号办理，手机话费9折充值，全国手机话费9折直冲，内部套餐卡办理！智能监控，智能联控等物联网服务！",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // breadcrumbs: false,
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "流客科技热门产品",
          blogSidebarCount: "ALL",
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      autoCollapseSidebarCategories: true,
      announcementBar: {
        id: "support_us",
        content:
          "流客科技流量卡、手机靓号、随身wifi、内部套餐卡,全网招收实力代理 &#128242;155563 55573",
        backgroundColor: "#363636",
        textColor: "#00FF00",
        isCloseable: false,
      },
      metadata: [
        {
          name: "keywords",
          content: "流客科技, 流量卡官网, 物联卡官网,流量卡免费申请,流量卡办理",
        },
      ],
      navbar: {
        title: "流客科技官网",
        logo: {
          alt: "流量卡官网",
          src: "img/logo.webp",
        },
        items: [
          {
            type: "dropdown",
            docId: "docs/classify",
            position: "left",
            label: "流量卡分类",
            items: [
              {
                // type: "doc",
                label: "移动流量卡",
                docId: "ydcard",
                to: "/docs/ydcard",
              },
              {
                // type: "doc",
                label: "联通流量卡",
                docId: "ltcard",
                to: "/docs/ltcard",
              },
              {
                label: "电信流量卡",
                docId: "dxcard",
                to: "/docs/dxcard",
              },
            ],
          },
          {
            position: "left",
            label: "流量卡办理",
            to: "/docs/appaly",
          },
          {
            position: "left",
            label: "流量卡通用不限速",
            to: "docs/hot",
            items: [
              {
                label: "电信畅享卡39元100G",
                to: "/docs/cx",
              },
              {
                label: "电信星卡29元100G",
                to: "/docs/xingka",
              },
              {
                label: "雨燕卡29元103G 59元203G",
                to: "/docs/lt",
              },
            ],
          },
          {
            docId: "agent",
            label: "流量卡代理",
            position: "left",
            to: "docs/agent",
          },
          { to: "/blog", label: "热门产品" },
          {
            to: "https://lkth.vercel.app",
            label: "产品合集",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://lkth.vercel.app",
            label: "官方",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "友链",
            items: [
              {
                label: "关于我们",
                to: "docs",
              },
              {
                label: "产品导航",
                to: "https://lkth.vercel.app",
              },
            ],
          },
          {
            title: "流量卡产品",
            items: [
              {
                label: "流量卡",
                to: "weixin://dl/business/?t=b4nr2JN2NXv",
              },
              {
                label: "内部套餐卡",
                to: "http://tc.liuketh.cn/",
              },
              {
                label: "互联网卡",
                to: "https://card.xuankaba.com/t/0.x5bgrv",
              },
            ],
          },
          {
            title: "靓号系列",
            items: [
              {
                label: "免费靓号",
                to: "http://iot.liuketh.cn/",
              },
              {
                label: "精品靓号",
                to: "http://lh.liuketh.cn",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 流客科技-万网之流,来者皆客  &#128234; lk@liuketh.cn`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
