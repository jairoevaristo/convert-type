import {
  getPathDirectoryAbsolute,
  createDirectory,
  readFileDirectory
} from './directorys';

import { cli } from './cli';
import { running } from './convert';
import { options } from './defaultOptions';

async function app() {
  const pathChoices = getPathDirectoryAbsolute();
  const { initialQuestion } = cli({ choices: pathChoices });
  const response = await initialQuestion();

  const isPath = response.savePath || options.savePath;
  const isFile = response.filePath || options.filePath;

  createDirectory(isPath);
  const files = readFileDirectory(isFile);

  files?.forEach(item => {
    running(`${isFile}/${item}`, isPath)
  })
}

app();