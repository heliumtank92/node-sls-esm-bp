import SERVER_CONFIG from './config/SERVER_CONFIG.mjs'
import logger from '@am92/api-logger'

const { PORT } = SERVER_CONFIG

const startServer = async (app) => {
  try {
    // Start Server
    await app.listen(PORT)

    logger.success(`Server Started Successfully! Listening on Port: ${PORT}`)
  } catch (error) {
    logger.error(error)
    throw error
  }
}

export default startServer
