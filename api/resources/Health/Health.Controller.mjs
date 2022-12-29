import ResponseBody from '@am92/express-utils/ResponseBody'
import HealthModel from './Health.Model.mjs'

const HealthController = {
  get
}

export default HealthController

async function get (request, response, next) {
  const data = await HealthModel.get()
  const responseBody = new ResponseBody(200, 'Health Check Successful', data)
  response.body = responseBody
  process.nextTick(next)
}
