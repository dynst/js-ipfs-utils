'use strict'

/**
 * @typedef {globalThis.Headers} Headers
 * @typedef {globalThis.Request} Request
 * @typedef {globalThis.Response} Response
 */

const nativeFetch = require('native-fetch')

module.exports = nativeFetch
