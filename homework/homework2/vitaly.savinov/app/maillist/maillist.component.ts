import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-maillist',
  templateUrl: './maillist.component.html',
  styleUrls: ['./maillist.component.css']
})
export class MaillistComponent implements OnInit {
  public mails = [
    {id: 0, from: 'Arnold Schwarzenegger', subject: `I need your clothes, your boots and your motorcycle`, date: new Date()},
    {id: 0, from: 'Robert Patrick', subject: `Do you have a photograph of John?`, date: new Date()},
    {id: 0, from: 'Kristanna Loken', subject: `I like this car`, date: new Date()},
    {id: 0, from: 'Samuel Worthington', subject: `You think you're human?`, date: new Date()},
    {id: 0, from: 'Lee Byung Hun', subject: `no subject`, date: new Date()}
  ];
  
  private timerId;

  // a simple hash-function for making mail ID
  private myHash(i, j, keyStr_1, keyStr_2) {
    const key = 31;   // simple number as a multiplier
    let tmpNum = i + j;

    for (let curIndex = 0; curIndex < keyStr_1.length; curIndex++) {
      tmpNum += (keyStr_1.charCodeAt(curIndex) + key * curIndex);
    }

    for (let curIndex = 0; curIndex < keyStr_2.length; curIndex++) {
      tmpNum += (keyStr_2.charCodeAt(curIndex) + key * curIndex);
    }

    return tmpNum;
  }

  constructor() { }

  ngOnInit() {
    this.mails.forEach( (item, itemNum) => {
      item.id = this.myHash(item.date.getTime(), itemNum, item.from, item.subject);
    } );

    this.timerId = setInterval( () => {
      const curDate = new Date();
      const itemNum = this.mails.length;

      const newFrom = 'Arnold Schwarzenegger';
      const newSubject = `I'll be back`;
      const newId = this.myHash(curDate.getTime(), itemNum, newFrom, newSubject);

      this.mails.push({id: newId, from: newFrom, subject: newSubject, date: curDate});
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  onDelete(curMail) {
    const curTime = new Date().getTime();
    console.log(`Lifetime of deleted mail: ${(curTime - curMail.date.getTime()) / 1000} сек`);
    this.mails.splice(this.mails.indexOf(curMail), 1);
  }

}
