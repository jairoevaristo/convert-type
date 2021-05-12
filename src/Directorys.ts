import path from 'path';
import fs from 'fs';

type IPath = {
  files: string[];
};

function getPathDirectoryAbsolute(): string[] {
  const pathRoot = process.cwd().split(path.sep).slice(0, 3);
  const pathCurrent = pathRoot.join('/');
  
  const dir = fs.readdirSync(path.join(pathCurrent));
  const pathDirectory = dir.filter(item => !item.includes('.'));

  const pathFormat = pathDirectory.map(item => (
    `${pathCurrent}/${item}`
  ));

  return pathFormat;
}

function createDirectory(path: string) {
  fs.mkdir(`${path}/convert`, err => {
    if (err) console.log('Erro ao criar o diretorio');
  }); 
}

function readFileDirectory(path: string) {
  try {
    const files = fs.readdirSync(path, 'utf-8');
  
    return files;

  } catch {
    console.error('Erro ao ler os arquivos');
  }

}

export {
  getPathDirectoryAbsolute,
  createDirectory,
  readFileDirectory
};