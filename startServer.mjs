import SERVER_CONFIG from './config/SERVER_CONFIG.mjs'
import logger from '@am92/api-logger'

const { PORT } = SERVER_CONFIG

const name = process.env.npm_package_name
const version = process.env.npm_package_version
const service = `${name}@${version}`

const startServer = async (app) => {
  try {
    // Start Server
    await app.listen(PORT)
    logger.success(`[${service}] Server Started Successfully! Listening on Port: ${PORT}`)
  } catch (error) {
    const errorMessage = `[${service}] ${error.message}`
    logger.error(errorMessage, error)
    throw error
  }
}

export default startServer
