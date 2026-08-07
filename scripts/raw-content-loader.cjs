module.exports = function rawContentLoader(source) {
  return `export default ${JSON.stringify(String(source))};`;
};
