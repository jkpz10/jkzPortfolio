module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.vue',
      '.public/index.html',
      './src/**/*.js',
    ],
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
