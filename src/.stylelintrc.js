module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'unit-whitelist': ['em', 'rem', '%', 's', 'px', 'deg'],
    'block-no-empty': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
