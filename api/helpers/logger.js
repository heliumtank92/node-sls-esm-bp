import logger from '@am92/api-logger'

console.error = logger.error
console.warn = logger.warn
console.success = logger.success
console.info = logger.info
console.debug = logger.debug
console.trace = logger.trace
console.log = logger.log

export default logger
