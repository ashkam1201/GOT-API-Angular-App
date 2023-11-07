import {Component, OnInit, ViewChild} from '@angular/core';
import {ApigotService} from "../services/apigot.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatTableDataSource} from "@angular/material/table";
import {Book} from "./book";
import {MatPaginator} from "@angular/material/paginator";
import {Subscription} from "rxjs";
import Utils from "../utils/utils";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  sub !: Subscription;
  bookColumns: string[] = ['name'];
  bookColumnsWithExpand = [...this.bookColumns, 'expand'];
  dataSource = new MatTableDataSource<Book>();
  expandedBook!: MatTableDataSource<Book>
  pageSize: number= 12;
  pageSizeOption = [6, 12];
  applyFilter = Utils.applyFilter;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public _serviceGot: ApigotService) { }

  ngOnInit() {
    this.sub = this._serviceGot.getBooks(this.pageSize)
      .subscribe(
        data=> {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;

        }
      )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
