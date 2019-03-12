const {
  override,
  disableEsLint,
  useBabelRc,
  addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(
  disableEsLint(),
  useBabelRc(),
  addDecoratorsLegacy()
);
