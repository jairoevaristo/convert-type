import inquirer from 'inquirer';

type IChoices = {
  choices: string[];
};

type IReponse = {
  filePath: string;
  savePath: string;
}

type IAnswers = {
  isDefaultOptions: boolean | null;
}

type IQuestion = {
  type: string,
  name: string,
  message: string,
  choices?: string[];
  when?: (answers: any) => boolean;
}

function cli({ choices }: IChoices) {
  const question: IQuestion[] = [
    {
      type: 'confirm',
      name: 'isDefaultOptions',
      message: 'Deseja salvar no lugar de sempre?',
    },
    {
      type: 'input',
      name: 'filePath',
      message: 'Digite o caminho do seu arquivo',
      when: (answers: IAnswers) => {
        return answers.isDefaultOptions === false;
      },
    },
    {
      type: 'list',
      name: 'savePath',
      message: 'Escolha onde seus arquivos seram salvos',
      when: (answers: IAnswers) => {
        return answers.isDefaultOptions === false;
      },
      choices
    }
  ];

  async function initialQuestion(): Promise<IReponse> {
    const reponses = await inquirer.prompt(question);
    return reponses;
  };

  return { initialQuestion };
}

export { cli };