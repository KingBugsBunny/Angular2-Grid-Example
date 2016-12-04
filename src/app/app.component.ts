import { Component, OnInit } from '@angular/core';

import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ContainerComponent],
  providers: []
})
export class AppComponent implements OnInit{

  constructor() {

  }

  ngOnInit() {
  }

}
