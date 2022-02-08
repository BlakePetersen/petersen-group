module.exports = {
  '{apps,packages}/**/*.{js,ts,jsx,tsx}': ['eslint --cache --fix'],
  '*.{json,md}': ['prettier --write'],
}
