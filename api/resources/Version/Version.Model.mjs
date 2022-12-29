import { readFile } from 'fs/promises'

let packageJson = {}

const VersionModel = {
  get
}

export default VersionModel

async function get () {
  const { name = '', version = '', description = '' } = packageJson

  const data = { name, description, version }
  return data
}

(async () => {
  const packageJsonFile = await readFile(
    new URL('../../../package.json', import.meta.url)
  )
  packageJson = JSON.parse(packageJsonFile)
})()
