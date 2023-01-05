import NodeHttp from '@am92/node-http'
import httpContext from '@am92/express-utils/httpContext'
import { REQUEST_ID_HEADER_KEY, SESSION_ID_HEADER_KEY } from '@am92/express-utils/CONSTANTS'

let nodeHttp

if (!nodeHttp) {
  const CustomHeaderInterceptor = {
    request: [customHeaderRequestSuccess, null, { synchronous: true }]
  }

  nodeHttp = new NodeHttp()
  nodeHttp.useRequestInterceptor(CustomHeaderInterceptor.request)
}

export default nodeHttp

function customHeaderRequestSuccess (config) {
  const requestId = httpContext.getRequestId()
  const sessionId = httpContext.getSessionId()

  config.headers[REQUEST_ID_HEADER_KEY] = requestId
  config.headers[SESSION_ID_HEADER_KEY] = sessionId

  return config
}
