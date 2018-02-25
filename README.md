# angular-20180118-2130

Что подготовить(или уже знать)?

- Javascript - https://learn.javascript.ru
- EcmaScript2015 - https://learn.javascript.ru/es-modern
- TypeScript
  -- классы/интерфейсы
  -- декораторы (класса, свойства)
  -- модификаторы доступа
  -- дженерики
- node.js (8+)
- git/github - как делать PR(pull request)

Как задавать вопрос
- групповой чат
- @мне
- мне лично slack/email

Курсовой проект
- индивидуальное задание
- общее задание

Прием курсовых
[19.02]
- [ИМЯ Фамилия] - [code] - [demo (github-page)]
- Pavel Davidov - https://github.com/DavidovPavel/mailbox - https://vigorous-minsky-7ab739.netlify.com

[26.02]
- [ИМЯ Фамилия] - [code] - [demo (github-page)]
- Виталий Савинов - https://github.com/vpapazol/mailclone - http://musing-cray-0abffd.netlify.com  - запускать только на http://
- Валентин Кутин
- Дзвонкевич Савелий
- Юрий Бурка - https://github.com/Burich/ng5-course-proj - https://pseudo-mail.netlify.com
- Суматохин Сергей - https://github.com/Serdji/angularDZ - https://elastic-darwin-6f3f1d.netlify.com/

README
- about
- install
- ...


Дополнительные вопросы
- поиск утечек памяти
- работа с данными в многопользовательской системе. Как узнать, что данные нужно обновить и как правильно обновить?
- пожалуйста, объясните более подробно и убедительно, почему вы считаете, что двустороннюю привязку [(ngModel)] не следует использовать в Angular 2


3rd party
type?
- ui           -> component, directive
- logic/helper -> service

which?
-> Angular pure solution
-> Angular wrapper
-> own Angular pure solution 
-> own Angular wrapper




<input [(ngModel)]="user.name" (ngModelChange)="user.name = $event">


<user-card [(user)]="user">