import { green, red } from 'chalk'

const _log = green.bold
const _err = red.bold

/**
 * log
 * @description Logs the provided message to stdout togheter with the time it was logged at
 * @param {string} msg The message to print to stdout
 */
const log = (msg: string) => {
  console.log(_log(`[LOG] ${new Date().toISOString()} ${msg}`))
}

/**
 * error
 * @description Logs the provided message to stderr togheter with the time it was logged at
 * @param {string} msg The message to print to stderr
 */
const error = (msg: string) => {
  console.error(_err(`[ERR] ${new Date().toISOString()} ${msg}`))
}

const logger = {
  log,
  error
}

export default logger
