import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, AfterViewInit {

  private totalItems: number;
  currentPage: number;
  @Input() pageSize = 10;
  totalPages;

  private numberOfButtons = 5;

  @Output() activePage: EventEmitter<number> = new EventEmitter();

  itemsArray: Array<number>;

  constructor() {
  }

  ngOnInit() {
    /* Default values */
    this.currentPage = 1;
  }


  ngAfterViewInit() {
    this.itemsArray = this.getPageList();
  }


  @Input()
  set _totalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  changePage(page) {
    this.currentPage = page;
    this.activePage.emit(page + 1);
    this.itemsArray = this.getPageList();
  }

  // Get the array of pages to display
  // max numberOfButtons pages per view
  getPageList() {
    let startPage, endPage;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);

    /*
      If there are no enough items to fill numberOfButton
      endPage will be # of totalPages
     */
    if (this.totalPages <= this.numberOfButtons) {
      startPage = 1;
      endPage = this.totalPages;
    } else {
      /* Display the first {{numberofBtns}} numbers */
      if (this.currentPage <= 3) {
        startPage = 1;
        endPage = this.numberOfButtons;
      } else if (this.currentPage + 2 >= this.totalPages) {
        startPage = this.totalPages - this.numberOfButtons;
        endPage = this.totalPages - 1;
      } else {
        startPage = this.currentPage - 2;
        endPage = this.currentPage + 2;
      }
    }

    const pagesList = [];
    for (let index = startPage; index <= endPage; index++) {
      pagesList.push(index);
    }
    return pagesList;
  }

  next() {
    this.currentPage++;
    this.changePage(this.currentPage);
  }

  prev() {
    this.currentPage--;
    this.changePage(this.currentPage);
  }
}
