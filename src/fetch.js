'use strict'

/**
 * @typedef {globalThis.Headers} Headers
 * @typedef {globalThis.Request} Request
 * @typedef {globalThis.Response} Response
 */

const { isElectronMain } = require('./env.js')
const nativeFetch = require('native-fetch')
const electronFetch = require('electron-fetch')

// use window.fetch if it is available, fall back to node-fetch if not
let impl = nativeFetch

if (isElectronMain) {
  impl = electronFetch
}

module.exports = impl
