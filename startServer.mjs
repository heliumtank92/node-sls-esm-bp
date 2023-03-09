import ExpressUtils from '@am92/express-utils'
import SERVER_CONFIG, { SERVICE } from './config/SERVER_CONFIG.mjs'

const { PORT } = SERVER_CONFIG
const successLogFunc = console.success || console.info

export default async function startServer (app) {
  try {
    // Initialize Express Utils
    await ExpressUtils.initialize()

    // Start Server
    await app.listen(PORT)
    successLogFunc(`[${SERVICE}] Server Started Successfully! Listening on Port: ${PORT}`)
  } catch (error) {
    const errorMessage = `[${SERVICE}] ${error.message}`
    console.error(errorMessage, error)
    throw error
  }
}
