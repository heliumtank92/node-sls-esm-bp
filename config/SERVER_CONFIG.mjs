import packageJson from '../package.json' assert { type: 'json' }

// Set Package Name and Version in case these are filtered out for any reason
if (!process.env.npm_package_name) {
  const { name, version } = packageJson
  process.env.npm_package_name = name
  process.env.npm_package_version = version
}

const {
  PORT = 8080,
  BODY_LIMIT = '5mb',
  ALLOW_CORS_ORIGIN = '',
  ALLOW_CORS_METHODS = ''
} = process.env

const REQUIRED_CONFIG = [
  'ALLOW_CORS_ORIGIN',
  'ALLOW_CORS_METHODS'
]

REQUIRED_CONFIG.forEach(key => {
  if (!process.env[key]) {
    console.error('[Error] Missing SERVER Config:', key)
    return process.exit(1)
  }
})

const ALLOW_ORIGINS = ALLOW_CORS_ORIGIN.split(',')
const ALLOW_ORIGINS_REGEXP = ALLOW_ORIGINS.map(origin => new RegExp(_sanitizeRegExpStr(origin)))

const CORS_OPTIONS = {
  methods: ALLOW_CORS_METHODS,
  origin: ALLOW_ORIGINS_REGEXP,
  preflightContinue: false
}

const SERVER_CONFIG = {
  PORT,
  BODY_LIMIT,
  CORS_OPTIONS
}

export default SERVER_CONFIG

function _sanitizeRegExpStr(string) {
  const escapedString = string.trim().replace(/[./]/g, '\\$&')
  const whildcardReplaced = escapedString.replace(/\*/g, '[0-9a-zA-Z.\\-_:]*')
  return `^${whildcardReplaced}$`.trim()
}
