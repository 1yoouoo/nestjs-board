module.exports = {
  extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
  rules: {
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
  },
};
