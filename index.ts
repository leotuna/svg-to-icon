import fs from 'fs'
import { generateFonts, RunnerOptions, FontAssetType } from 'fantasticon'

const src = `./icons`
const dist = `./dist/icons`

if (!fs.existsSync(src)) {
  throw new Error('Directory /icons does not exist.')
}

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true });
}

const config: RunnerOptions = {
  name: 'icons',
  inputDir: src,
  outputDir: dist,
  fontTypes: ['woff2'] as FontAssetType[],
}

// if (process.env.NODE_ENV !== 'development') {
//   config.fontsUrl = ''
// }

generateFonts(config)
