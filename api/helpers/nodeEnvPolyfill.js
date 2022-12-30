import packageJson from '../../package.json' assert { type: 'json' }

// Set Package Name and Version in case these are filtered out for any reason
if (!process.env.npm_package_name) {
  const { name, version } = packageJson
  process.env.npm_package_name = name
  process.env.npm_package_version = version
}
