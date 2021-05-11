import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const run = promisify(exec);

async function running(filename: string, savePath: string) {
  const [name] = filename.split('.');

  console.log(`\n> Convertendo ${path.basename(filename)} para ${path.basename(name)}.pdf`);

  const { stdout } = await run(`magick convert ${filename} ${savePath}/${name}.pdf`);

  console.log(stdout)
  process.exit();
}

export { running };