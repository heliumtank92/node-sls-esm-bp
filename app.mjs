// NOTE: Prioritzed Imports
import './loadEnv.mjs'
import './polyfill/nodeEnv.js'
import './polyfill/apiLogger.js'
import '@am92/api-logger/polyfillConsole'

import { configureApp } from '@am92/express-utils'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import Routes from './api/routes/index.mjs'

import SERVER_CONFIG from './config/SERVER_CONFIG.mjs'
import startServer from './startServer.mjs'

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
