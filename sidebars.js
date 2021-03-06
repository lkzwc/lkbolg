/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  // tutorialSidebar: {
  //   "Category A": ["/flowcard/dxcard", "/flowcard/ltcard", "/flowcard/ydcard"],
  // },
  // apiSidebar: ["classify", "hot", "shengnei"],
  // But you can create a sidebar manually
  // tutorialSidebar: [
  //   {
  //     type: "category",
  //     label: "流量卡分类",
  //     items: ["classify/dxcard", "classify/ltcard", "classify/ydcard"],
  //   },
  // ],
};

module.exports = sidebars;
