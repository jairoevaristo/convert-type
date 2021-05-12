import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const run = promisify(exec);

async function running(filename: string, savePath: string) {
  const pathName = path.basename(filename)
  const [name] = pathName.split('.')

  console.log(`\n> Convertendo ${path.basename(name)}${path.extname(filename)} para ${path.basename(name)}.pdf`);

  const { stdout } = await run(`magick convert ${filename} ${savePath}/convert/${name}.pdf`);

  console.log(stdout)
  process.exit();
}

export { running };