import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public Users: Array<object> = [
    {
      name: "Пётр Алексеевич Романов (I)",
      position: "Царь",
      avatar: "http://psifactor.info/wp-content/uploads/2016/12/ue0bzh5s.jpeg\n"
    },
    {
      name: "Чапаев Василий Иванович",
      position: "Ведущий инженер",
      avatar: "http://uvalibrary.ucoz.net/_pu/0/68577133.jpg"
    },
    {
      name: "Ржевский",
      position: "Поручик",
      avatar: "https://im0-tub-ru.yandex.net/i?id=8222ed9fb8dfa69ed8ee271d25456775-l&n=13"
    }
  ];

  constructor() {}

}
