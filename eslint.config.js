const ESLINT_CONFIG_RULES = {
  'no-console': 'warn',
  'no-unused-vars': 'error',
  'no-undef': 'warn',
  'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'import/prefer-default-export': 'off',
  'react/jsx-filename-extension': [
    1,
    { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  ],
};

const ESLINT_IGNORE_PATTERNS = ['out/', 'build/', 'dist/', 'public/'];

module.exports = {
  rules: ESLINT_CONFIG_RULES,
  ignorePatterns: ESLINT_IGNORE_PATTERNS,
};
