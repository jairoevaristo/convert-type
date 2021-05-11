import {
  getPathDirectoryAbsolute,
  createDirectory,
  readFileDirectory
} from './Directorys';
import { cli } from './cli';
import { running } from './convert';

async function app() {
  const pathChoices = getPathDirectoryAbsolute();
  const { initialQuestion } = cli({ choices: pathChoices });
  const response = await initialQuestion();

  createDirectory(response.savePath);
  
}

app();