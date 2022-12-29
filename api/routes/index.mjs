import HealthRouter from './Health.mjs'
import VersionRouter from './Version.mjs'

const Routes = [
  { path: '/health', router: HealthRouter },
  { path: '/version', router: VersionRouter }

]

export default Routes
