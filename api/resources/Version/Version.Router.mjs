import configureRouter from '@am92/express-utils/configureRouter'

import VersionController from './Version.Controller.mjs'

const { get } = VersionController

const masterConfig = {
  preMiddlewares: [],

  postMiddlewares: [],

  routesConfig: {
    get: {
      method: 'get',
      path: '/',
      pipeline: [get]
    }
  }
}

class VersionRouter {
  constructor (Router, customConfig) {
    const resourceRouter = configureRouter(Router, masterConfig, customConfig)
    return resourceRouter
  }
}

export default VersionRouter
