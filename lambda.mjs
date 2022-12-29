import serverlessExpress from '@vendia/serverless-express'
import app from './app.mjs'

const handler = serverlessExpress({ app })

export { handler }
