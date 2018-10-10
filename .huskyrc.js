module.exports = {
  hooks: {
    'pre-commit': 'npm run lint',
    'pre-push':
      "concurrently 'npm run lint' 'npm run tsc' 'npm run type-coverage' 'npm run test' 'npm run type-coverage'",
  },
};
