import path from 'path';
import fs from 'fs';

type IPath = string[];

function getPathDirectoryAbsolute(): IPath {
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
  const directory = fs.mkdirSync(`${path}/convert-type`);
  return directory;
}

function readFileDirectory(path: string):IPath {
  const files = fs.readdirSync(path, 'utf-8');
  
  if (!fs.existsSync(path)) {
    console.error('Diretorio nao encontrado');
    process.exit();
  }

  return files;
}

export {
  getPathDirectoryAbsolute,
  createDirectory,
  readFileDirectory
};