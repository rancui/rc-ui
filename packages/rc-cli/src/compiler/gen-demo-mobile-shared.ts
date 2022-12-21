import { join } from 'path';
import fse from 'fs-extra';
import { SITE_MOBILE_COMPONENTS, SITE_MOBILE_DEMO_FILE } from '../common/constant.js';
import { pascalize, smartOutputFile, normalizePath } from '../common/index.js';

type DemoItem = {
  name: string;
  path: string;
  component: string;
};

function genDemoImports(demo_components: DemoItem[]) {
  return demo_components
    .map((item) => `import ${item.name} from '${normalizePath(item.path)}';`)
    .join('\n');
}

function genDemoExports(demo_components: DemoItem[]) {
  return `export const components = {\n  ${demo_components
    .map((item) => item.name)
    .join(',\n  ')}\n};`;
}

function genCode() {
  const demos = ['DemoBlock', 'DemoSection']
    .map((component) => ({
      component,
      name: pascalize(component),
      path: join(SITE_MOBILE_COMPONENTS, component),
    }))
    .filter((item) => fse.pathExistsSync(item.path));

  return `
 ${genDemoImports(demos)}
 ${genDemoExports(demos)}
`;
}

export function genDemoMobileShared() {
  const code = genCode();

  smartOutputFile(SITE_MOBILE_DEMO_FILE, code);
}
