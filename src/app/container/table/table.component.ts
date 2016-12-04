import { Component, OnInit, Input } from '@angular/core';

import { SearchPipe, OrderByPipe } from '../../pipes/index';

import { SortFormComponent } from '../sort-form/sort-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  directives: [SortFormComponent],
  pipes: [SearchPipe, OrderByPipe]
})

export class TableComponent implements OnInit {
  @Input() rowData: Array<any> = [];
  @Input() term: String;
  @Input() order: String;

  constructor() {}

  ngOnInit() {
  }
}
