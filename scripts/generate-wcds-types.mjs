import { generateVuejsTypes } from 'custom-element-vuejs-integration';
import manifest from '@nitramburesh/wcds/custom-elements.json' with { type: 'json' };

generateVuejsTypes(manifest, {
  outdir: './src',
  fileName: 'wcds-vue.d.ts',
  globalTypePath: '@nitramburesh/wcds',
});
