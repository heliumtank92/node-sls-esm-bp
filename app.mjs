// NOTE: Prioritzed Imports
import 'dotenv/config'
import './api/polyfill/nodeEnv.js'
import './api/polyfill/apiLogger.js'
import '@am92/api-logger/polyfillConsole'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { configureApp } from '@am92/express-utils'

import startServer from './startServer.mjs'
import Routes from './api/routes/index.mjs'
import SERVER_CONFIG from './config/SERVER_CONFIG.mjs'

const { BODY_LIMIT, CORS_OPTIONS } = SERVER_CONFIG
const app = express()

app.use(cors(CORS_OPTIONS))
app.use(express.json({ limit: BODY_LIMIT }))
app.use(express.urlencoded({ limit: BODY_LIMIT, extended: true }))
app.use(helmet())

// Initialize Routes
configureApp(app, Routes)

// Start Server
await startServer(app)

// For testing
export default app
