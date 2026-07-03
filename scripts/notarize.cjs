const path = require('node:path')
const { notarize } = require('@electron/notarize')

module.exports = async function notarizeApp(context) {
  if (context.electronPlatformName !== 'darwin') {
    return
  }

  const appleIdPassword =
    process.env.APPLE_APP_SPECIFIC_PASSWORD || process.env.APPLE_ID_PASSWORD

  const requiredEnvVars = [
    'APPLE_ID',
    'APPLE_APP_SPECIFIC_PASSWORD (or APPLE_ID_PASSWORD)',
    'APPLE_TEAM_ID'
  ]

  const missingEnvVars = []
  if (!process.env.APPLE_ID) {
    missingEnvVars.push(requiredEnvVars[0])
  }
  if (!appleIdPassword) {
    missingEnvVars.push(requiredEnvVars[1])
  }
  if (!process.env.APPLE_TEAM_ID) {
    missingEnvVars.push(requiredEnvVars[2])
  }

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
    appleIdPassword,
    teamId: process.env.APPLE_TEAM_ID
  })
}

