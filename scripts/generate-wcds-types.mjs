import { generateVuejsTypes } from 'custom-element-vuejs-integration';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const manifest = require('@nitramburesh/wcds/custom-elements.json');

generateVuejsTypes(manifest, {
  outdir: './src',
  fileName: 'wcds-vue.d.ts',
  globalTypePath: '@nitramburesh/wcds',
});
