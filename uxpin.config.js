module.exports = {
  components: {
    categories: [
      {
        name: "Components",
        include: [
          "src/components/Accordion.tsx",
          "src/components/AccordionGroup.tsx",
          "src/components/AccordionGroupItem.tsx",
          "src/components/Button.tsx",
        ],
      },
      {
        name: "Layout",
        include: ["src/components/Inset.tsx"],
      },
    ],
    wrapper: "src/wrapper/UXPinWrapper.js",
    webpackConfig: "webpack.config.js",
  },
  name: "halstack-react",
};
