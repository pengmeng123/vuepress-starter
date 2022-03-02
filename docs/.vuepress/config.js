module.exports = {
  title: "标题11",
  description: "我的个人网站",
  head: [
    ["link", { rel: "icon", href: "/egg.png" }], //浏览器的标签栏的网页图标
  ],
  base: "/vuepress-starter/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  plugins: [
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }],
    '@vuepress-reco/extract-code',
    'vuepress-plugin-demo-container'
  ],
  themeConfig: {
    logo: "/egg.png",
    // lastUpdated: 'lastUpdate', // string | boolean
    nav: [
      { text: "首页", link: "/" },
      {
        text: "分类",
        ariaLabel: "分类",
        items: [
          { text: "文章", link: "/pages/foo/one/" },
          { text: "琐碎", link: "/pages/bar/three/" },
        ],
      },
      { text: "功能演示", link: "/pages/foo/two/" },
      { text: "Github", link: "https://github.com/dwanda" },
    ],
    sidebar: {
      "/pages/bar/": [
        {
          title: "测试菜单1", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          // sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ["three.md", "子菜单1"], //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
            ["four.md", "子菜单2"],
          ],
        },
        {
          title: "测试菜单2",
          collapsable: false, // 可选的, 默认值是 true,
          children: [["five.md", "子菜单1"]],
        },
      ],
      "/pages/foo/": [
        {
          title: "测试菜单1", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ["one.md", "子菜单1"], //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
            ["two.md", "子菜单2"],
          ],
        },
      ],

      // fallback
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
