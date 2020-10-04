import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'book-store';

  constructor(private appService: AppService) { }

  ngOnInit() {
    console.log('Init App');
  }

  refreshSession() {
    this.appService.reloadApp();
  }
}
