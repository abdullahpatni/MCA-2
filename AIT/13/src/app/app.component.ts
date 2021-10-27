import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  msg:string | undefined;
  title = 'Q13';
  constructor() {
  }

  getName(): string{
    this.msg='Abdullah';
    return this.msg;
  }
}
