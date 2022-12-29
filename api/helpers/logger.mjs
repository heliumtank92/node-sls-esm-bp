import logger from '@am92/api-logger'

console.log = logger.log
console.warn = logger.warn
console.error = logger.error
console.debug = logger.debug
console.info = logger.info
console.trace = logger.trace

export default logger
