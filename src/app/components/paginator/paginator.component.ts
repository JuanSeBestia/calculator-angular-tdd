import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {

  private arrayLength: number;
  itemActive: number;
  @Output() activePage: EventEmitter<number> = new EventEmitter();

  itemsArray: Array<number>;

  constructor() { }

  ngOnInit() {

  }

  @Input()
  set _arrayLength(arrayLength: number) {
    this.arrayLength = arrayLength;
    this.itemsArray = [...Array(this.arrayLength).keys()];
    this.itemActive = this.itemsArray[0];
  }

  changePage(page) {
    this.itemActive = page;
    this.activePage.emit(page + 1);
  }
}
