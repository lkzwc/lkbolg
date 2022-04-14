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
      metadata: [{ name: "keywords", content: "cooking, blog" }],
      navbar: {
        title: "流客科技",
        logo: {
          alt: "流客科技 Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "流客科技",
            position: "left",
            label: "流量卡使用手册",
          },
          { to: "/blog", label: "产品政策", position: "left" },
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
                href: "https://www.liuketh.cn",
              },
              {
                label: "流客科技产品导航",
                href: "https://lkth.vercel.app",
              },
            ],
          },
          {
            title: "热门产品",
            items: [
              {
                label: "流量卡",
                href: "weixin://dl/business/?t=b4nr2JN2NXv",
              },
              {
                label: "内部套餐卡",
                href: "http://tc.liuketh.cn/",
              },
              {
                label: "互联网卡",
                href: "https://card.xuankaba.com/t/0.x5bgrv",
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
                href: "http://iot.liuketh.cn/",
              },
              {
                label: "精品靓号",
                href: "http://lh.liuketh.cn",
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
