import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const run = promisify(exec);

async function running(filename: string, savePath: string) {
  const pathName = path.basename(filename)
  const [name] = pathName.split('.')

  const { stdout } = await run(`magick convert ${filename} ${savePath}/convert/${name}.pdf`);

  console.log(`[x] - Convertendo ${path.basename(name)}${path.extname(filename)} para ${path.basename(name)}.pdf`);

  console.log(stdout)
}

export { running };