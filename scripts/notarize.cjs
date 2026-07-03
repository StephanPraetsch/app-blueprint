const path = require('node:path')
const { notarize } = require('@electron/notarize')

module.exports = async function notarizeApp(context) {
  if (context.electronPlatformName !== 'darwin') {
    return
  }

  const requiredEnvVars = [
    'APPLE_ID',
    'APPLE_APP_SPECIFIC_PASSWORD',
    'APPLE_TEAM_ID'
  ]

  const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name])

  if (missingEnvVars.length > 0) {
    if (process.env.CI === 'true') {
      throw new Error(`Missing Apple notarization secrets: ${missingEnvVars.join(', ')}`)
    }

    return
  }

  const { appOutDir, packager } = context
  const appName = packager.appInfo.productFilename
  const appPath = path.join(appOutDir, `${appName}.app`)

  await notarize({
    appBundleId: packager.appInfo.id,
    appPath,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_APP_SPECIFIC_PASSWORD,
    teamId: process.env.APPLE_TEAM_ID
  })
}

