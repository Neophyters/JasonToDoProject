import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jasonToDoProject';
  displayLogin: boolean = false;

  constructor(
    private dialog: MatDialog
  ) {

  }

  openUserLogin() {
    this.dialog.open(UserLoginComponent);
  }
}
