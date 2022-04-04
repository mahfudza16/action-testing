module.exports = {
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'tests',
        'feat',
        'fix',
        'refactor',
        'ci',
        'docs',
        'add'
      ],
    ],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};