module.exports = {
  plugins: [
    require("postcss-preset-env")({
      features: { "nesting-rules": false }
    })
    // "tailwindcss/nesting": "postcss-nesting", tailwindcss: {}
    // { "postcss-import": {} }
  ]
};
