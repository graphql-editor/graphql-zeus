import prompts from 'prompts';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

export async function createProject(): Promise<void> {
  console.log('\n⚡ Zeus Project Creator\n');

  // 1. Prompt for template
  const { template } = await prompts({
    type: 'select',
    name: 'template',
    message: 'Which template would you like to use?',
    choices: [
      { title: 'Next.js', value: 'nextjs', description: 'Next.js 16 + React 19 + Tailwind CSS 4' },
      { title: 'Vite', value: 'vite', description: 'Vite 7 + React 19 + Tailwind CSS 4' },
    ],
  });

  if (!template) {
    console.log('Cancelled.');
    process.exit(0);
  }

  // 2. Prompt for project name
  const { projectName } = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'What is your project name?',
    initial: 'my-zeus-app',
    validate: (value: string) => {
      if (!value) return 'Project name is required';
      if (!/^[a-z0-9-_]+$/i.test(value))
        return 'Project name can only contain letters, numbers, hyphens, and underscores';
      if (fs.existsSync(path.resolve(process.cwd(), value))) return `Directory "${value}" already exists`;
      return true;
    },
  });

  if (!projectName) {
    console.log('Cancelled.');
    process.exit(0);
  }

  // 3. Copy template to target directory
  // __dirname will be lib/commands when running compiled code
  // So we need to go up to package root (../../) to find starters
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const packageRoot = path.join(__dirname, '..', '..');
  const startersDir = path.join(packageRoot, 'starters', template);
  const targetDir = path.resolve(process.cwd(), projectName);

  // Check if starters directory exists
  if (!fs.existsSync(startersDir)) {
    console.error(`Error: Starter template "${template}" not found at ${startersDir}`);
    process.exit(1);
  }

  copyDirRecursive(startersDir, targetDir);

  // 4. Update package.json with project name
  const pkgPath = path.join(targetDir, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.name = projectName;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  // 5. Print success message
  const isNextjs = template === 'nextjs';
  const zeusOutputPath = isNextjs ? './lib' : './src/lib';
  const devPort = isNextjs ? '3000' : '5173';

  console.log(`
✅ Created "${projectName}" successfully!

Next steps:

  cd ${projectName}
  npm install
  npm run dev

To generate Zeus client from your GraphQL schema:

  npx graphql-zeus <schema-url-or-path> ${zeusOutputPath}${isNextjs ? ' --node' : ''}

Your app will be running at http://localhost:${devPort}

Happy coding! ⚡
`);
}

function copyDirRecursive(src: string, dest: string): void {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
