export class LetterListService {

  letters = [
    {
      id: 0,
      letterList: [
        {
          brief: 'letter 1',
          body: 'В смысловой цельности текста отражаются те связи и зависимости, которые имеются в самой действительности (общественные события, явления природы, человек, его внешний облик и внутренний мир, предметы неживой природы и т. д.).\n' +
          '\n' +
          'Единство предмета речи — это тема высказывания. Тема — это смысловое ядро текста, конденсированное и обобщённое содержание текста.'
        },
        {
          brief: 'letter 2',
          body: 'Текст письма 2'
        },
        {
          brief: 'letter 3',
          body: 'Текст письма 3'
        }
      ]
    },
    {
      id: 1,
      letterList: [
        {
          brief: 'letter 4',
          body: 'Текст письма 4'
        },
        {
          brief: 'letter 5',
          body: 'Текст письма 5'
        },
        {
          brief: 'letter 6',
          body: 'Текст письма 6'
        },
        {
          brief: 'letter 7',
          body: 'Текст письма 7'
        },
        {
          brief: 'letter 8',
          body: 'Текст письма 8'
        }
      ]
    }
  ];

  public letterId: number;

  setLetterId(id) {
    return this.letterId = id;
  }

  getLetterId() {
    return this.letterId;
  }
}
