import { Component, OnInit } from '@angular/core';
import { BoxListService } from '../box-list.service';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {
  public boxlist;

  constructor(
    private _boxListService: BoxListService
  ) { }

  ngOnInit() {
    this._boxListService.getList().subscribe(boxlist => {
      this.boxlist = boxlist;
      console.log(this.boxlist);
    });
  }

}
