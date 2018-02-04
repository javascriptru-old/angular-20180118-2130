import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IMail} from '../mail-box.component';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.scss']
})
export class MailItemComponent implements OnInit, OnDestroy {
  @Input() mail: IMail;
  @Output() onDelete: EventEmitter<IMail> = new EventEmitter<IMail>();
  private dateReceived: Date;
  private dateDeleted: Date;
  public isNewItem: boolean = true;

  get senderFullName(): string {
    return `${this.mail.name} ${this.mail.surname}`;
  }

  get formattedDate(): string {
    return this.dateReceived.toLocaleString();
  }

  public handleDeleteBtnClick(): void {
    this.onDelete.emit(this.mail);
  }

  public ngOnInit() {
    this.dateReceived = new Date;

    setTimeout(() => {
      this.isNewItem = false;
    }, 1500);
  }

  public ngOnDestroy() {
    this.dateDeleted = new Date();
    const lifeTimeSec: number = Math.round((this.dateDeleted.getTime() - this.dateReceived.getTime()) / 1000);

    console.log(`Component's lifetime is ${lifeTimeSec} sec`);
  }
}
