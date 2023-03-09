import NodeHttp from '@am92/node-http'
import { EXPS_CONST, httpContext } from '@am92/express-utils'

const CustomHeaderInterceptor = {
  request: [customHeaderRequestSuccess, null, { synchronous: true }]
}

const nodeHttp = new NodeHttp()
nodeHttp.useRequestInterceptor(CustomHeaderInterceptor.request)

export default nodeHttp

function customHeaderRequestSuccess (config) {
  const requestId = httpContext.getRequestId()
  const sessionId = httpContext.getSessionId()

  config.headers[EXPS_CONST.REQUEST_ID_HEADER_KEY] = requestId
  config.headers[EXPS_CONST.SESSION_ID_HEADER_KEY] = sessionId

  return config
}
