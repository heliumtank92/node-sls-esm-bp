import configureRouter from '@am92/express-utils/configureRouter'

import HealthController from './Health.Controller.mjs'

const { get } = HealthController

const masterConfig = {
  preMiddlewares: [],

  postMiddlewares: [],

  routesConfig: {
    get: {
      method: 'post',
      path: '/',
      pipeline: [get]
    }
  }
}

class HealthRouter {
  constructor (Router, customConfig) {
    const resourceRouter = configureRouter(Router, masterConfig, customConfig)
    return resourceRouter
  }
}

export default HealthRouter
