import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Output() updateUsers: EventEmitter<any>;
  public update: EventEmitter<any> = new EventEmitter();
  public formData: { name: string, title: string, thumb: string } = {
    name: '',  title: '', thumb: 'https://placeholdit.co/i/60x60'
  };
  constructor(private userService: UsersService) { }

  ngOnInit() {
  }
  public onSubmit(event) {
    event.preventDefault();
    event.target.elements.filter = Array.prototype.filter;
    event.target.elements.forEach = Array.prototype.forEach;
    event.target.elements
        .filter(item => item.type !== 'submit')
        .forEach(item => {
          if (item.value) {
              this.formData[item.name] = item.value;
              item.value = '';
          } else {
              throw new Error('All the fields required');
          }
        });
    this.userService.add(this.formData).subscribe(response => this.update.emit(response.json()));
  }
}
