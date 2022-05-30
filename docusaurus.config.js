// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "流量卡物联卡手机靓号随身wifi手机优惠套餐申请办理-流客科技官网",
  tagline:
    "流客科技-万网之流，来着皆客。提供IOT全面服务,包括通信领域,物联网领域,流量卡领域,可进行手机卡办理,靓号办理,155555、1555522、1555533、1314520手机靓号办理,全国手机话费9折充值,内部套餐卡办理! 随身wifi,5G云路由,智能监控等物联网服务!",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  titleDelimiter: "-",
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
          blogSidebarCount: "ALL",
          // Please change this to your repo.
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "agent",
        path: "agent",
        routeBasePath: "agent",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "classify",
        routeBasePath: "classify",
        path: "classify",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "appaly",
        path: "appaly",
        routeBasePath: "appaly",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... 其他设置
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "wifi",
        routeBasePath: "wifi",
        path: "wifi",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "news",
        routeBasePath: "news",
        path: "news",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          content:
            "流客科技, 流量卡官网, 物联卡官网,流量卡随身wifi免费办理申请",
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
            docId: "classify",
            label: "流量卡",
            to: "classify/dxcard",
          },
          {
            docId: "wifi",
            label: "上网设备",
            to: "wifi",
          },
          {
            docId: "appaly",
            label: "免费领卡",
            to: "appaly/appaly",
          },
          {
            docId: "agent",
            label: "流量卡代理",
            to: "agent/agent",
          },
          { to: "Products", activeBasePath: "blog", label: "热门产品" },
          { to: "news", activeBasePath: "news", label: "最新资讯" },
          {
            href: "https://lkthall.vercel.app",
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
