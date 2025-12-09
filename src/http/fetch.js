'use strict'

/**
 * @typedef {object} fetchImpl
 * @property {globalThis.fetch} fetchImpl.fetch
 * @property {globalThis.Request} fetchImpl.Request
 * @property {globalThis.Response} fetchImpl.Response
 * @property {globalThis.Headers} fetchImpl.Headers
 */

const fetchNode = require('./fetch.node')
const fetchBrowser = require('./fetch.browser')

let fetch = fetchNode;

if (typeof XMLHttpRequest === 'function') {
  // Electron has `XMLHttpRequest` and should get the browser implementation
  // instead of node.
  fetch = fetchBrowser
}

/** @type {fetchImpl} */
module.exports = fetch
