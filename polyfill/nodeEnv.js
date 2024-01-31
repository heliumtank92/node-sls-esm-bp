import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

// Set Package Name and Version in case these are filtered out for any reason
if (!process.env.npm_package_name) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const packageJSOnPath = path.resolve(__dirname, '../package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJSOnPath))

  const { name, version } = packageJson
  process.env.npm_package_name = name
  process.env.npm_package_version = version
}
