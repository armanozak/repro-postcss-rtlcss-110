module.exports = {
  plugins: [
    require("postcss-import")(),
    require("tailwindcss")(),
    require("postcss-rtlcss")({
      safeBothPrefix: false,
      processKeyFrames: true,
      useCalc: true,
      ltrPrefix: "[dir=ltr]",
      rtlPrefix: "[dir=rtl]",
    }),
  ],
};
