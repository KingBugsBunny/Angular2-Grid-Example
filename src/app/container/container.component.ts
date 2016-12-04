import { Component, OnInit } from '@angular/core';

import { ReturnService } from '../services/index';

import { TableComponent } from './table/table.component';
import { SortFormComponent } from './sort-form/sort-form.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  directives: [ TableComponent, SortFormComponent ],
  providers: [ReturnService]

})
export class ContainerComponent implements OnInit {

  constructor(private returnService: ReturnService) { }

  rowData: Array<any> = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.returnService.loadAll()
      .subscribe((res: any) => {
        this.rowData = res.data;
      }, err => {
        console.log('An error has occured: ' + err);
      });
  }
}
