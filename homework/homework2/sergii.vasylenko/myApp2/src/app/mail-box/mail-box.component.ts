import { Component, OnInit, Input } from '@angular/core';
import { mail } from './mail/mail';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html'
})

export class MailBoxComponent implements OnInit {

  @Input() public data: Array<mail> = new Array<mail>();
  private calculateId: number;
  constructor() { 
    
  }

  ngOnInit() {
    this.data.push(new mail(1, "1 header", "1 body"));
    this.data.push(new mail(2, "2 header", "2 body"));
    this.data.push(new mail(3, "3 header", "3 body"));

    this.calculateId = this.data.length;

    this.generateNewItems();
  }

  public deleteItem(item) {
    let index = this.data.findIndex(x => x.id === item.id);
    this.data.splice(index, 1);
  }

  private generateNewItems() {
    setInterval(() => {
      this.calculateId++; // Increase Id
      this.data.push(new mail(this.calculateId, "New header", "New body"));
    }, 3000);  // 3 sec
  }
}
