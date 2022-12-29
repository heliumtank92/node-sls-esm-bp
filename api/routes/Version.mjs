import Express from 'express'
import { VersionRouter } from '../resources/Version/index.mjs'

const config = {
  routesConfig: {
    get: { enabled: true }
  }
}

const Router = new Express.Router()
const resourceRouter = new VersionRouter(Router, config)

export default resourceRouter
