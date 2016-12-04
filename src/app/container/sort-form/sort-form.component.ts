import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.css'],
  directives: [ReactiveFormsModule],
  provider: [FormBuilder]
})
export class SortFormComponent implements OnInit {
  @Output() order = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {

    this.search.emit('');
    this.order.emit('+');
  }
}
