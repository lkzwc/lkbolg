// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "流客科技",
  tagline: "流客科技-万网之流，来着皆客",
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
          blogSidebarTitle: "All posts",
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
          '流客科技, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: "#fadddd",
        textColor: "red",
        isCloseable: false,
      },
      metadata: [
        {
          name: "keywords",
          content: "流客科技, 流量卡官网, 物联卡官网,流量卡免费申请",
        },
      ],
      navbar: {
        title: "流客科技",
        logo: {
          alt: "流客科技 Logo",
          src: "img/logo.png",
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
                to: "/docs/ltcard",
              },
              {
                label: "电信流量卡",
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
            // type: "doc",
            docId: "hot",
            position: "left",
            label: "流量卡无限不限速",
            to: "/hot",
          },
          // {
          //   type: "doc",
          //   docId: "agent",
          //   position: "left",
          //   label: "流量卡代理",
          // },
          {
            type: "localeDropdown",
            position: "right",
          },
          { to: "/blog", label: "产品政策", position: "left" },
          {
            to: "https://lkth.vercel.app",
            label: "产品合集",
            position: "left",
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
                label: "流量卡教程",
                to: "/docs",
              },
              {
                label: "流客科技",
                to: "https://www.liuketh.cn",
              },
              {
                label: "流客科技产品导航",
                to: "https://lkth.vercel.app",
              },
            ],
          },
          {
            title: "热门产品",
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
            title: "精选产品",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "手机靓号",
                to: "http://iot.liuketh.cn/",
              },
              {
                label: "精品靓号",
                to: "http://lh.liuketh.cn",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 流客科技-万网之流,来者皆客`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
