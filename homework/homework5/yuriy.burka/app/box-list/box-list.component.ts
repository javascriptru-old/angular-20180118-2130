import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';
import { Letterbox } from '../_model/letterbox';
import { LettersService } from '../_service/letters.service';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {

  userName: string;
  boxes: Letterbox[];

  constructor(
    private auth: AuthService,
    private router: Router,
    private letterService: LettersService
  ) { }

  ngOnInit() {
    this.userName = this.auth.userName;
    this.boxes = this.letterService.getBoxes();
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
