'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appIndexFile: resolveApp('src/index.tsx'),
  appHtmlIndexFile: resolveApp('public/index.html'),
  appNodeModules: resolveApp('node_modules'),
  appSrc: resolveApp('src'),
};
