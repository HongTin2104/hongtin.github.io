/* eslint-disable no-param-reassign */
const Config = require('../../config');

const Utils = {
  /**
   * Join provided url paths.
   * @param {...string} paths Provided paths. It doesn't matter if they have trailing slash.
   * @return {string} Resolved url without trailing slash.
   */
  resolveUrl: (...paths) => {
    let resolvedUrl = paths.reduce((acc, path) => {
      const urlPath = path.toString().trim();
      if (urlPath) {
        acc += (acc === '' ? '' : '/') + urlPath.replace(/^\/|\/$/g, '');
      }
      return acc;
    }, '');

    if (!/^(https?:\/\/)/i.test(resolvedUrl)) {
      resolvedUrl = resolvedUrl[0] !== '/' ? `/${resolvedUrl}` : resolvedUrl;
    }
    return resolvedUrl;
  },
  /**
   * Resolve a page url adding a trailing slash.
   * Needed to prevent 301 redirects cause of Gatsby.js' folder structure.
   * @param {...string} path Provided paths. It doesn't matter if they have trailing slash.
   * @return {string} Resolved url with trailing slash.
   */
  resolvePageUrl: (...path) => {
    const resolvedUrl = Utils.resolveUrl(...path);
    return resolvedUrl;
  },
  /**
   * Capitalize passed string
   * @param {string} str string to capitalize
   * @return {string} string with first letter to uppercase
   */
  capitalize: (str) => str[0].toUpperCase() + str.slice(1),
};

module.exports = Utils;
