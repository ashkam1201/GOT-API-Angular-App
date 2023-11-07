import {Component,OnInit, ViewChild} from '@angular/core';
import {Character} from "./characters";
import {ApigotService} from "../services/apigot.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {first, Subscription} from "rxjs";
import Utils from "../utils/utils";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  sub !: Subscription;
  characterColumns: string[] = ['name'];
  characterColumnsWithExpand = [...this.characterColumns, 'expand'];
  dataSource = new MatTableDataSource<Character>();
  expandedCharacter!: MatTableDataSource<Character>;
  pageSize: number= 50;
  pageSizeOption = [5, 10, 15, 50];
  currentPage!: number;
  isFirstPage = true;
  isLastPage = false;
  applyFilter = Utils.applyFilter;

 @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _serviceGot: ApigotService) {
  }

  ngOnInit() {

    this.currentPage = 1;

    this.sub = this._serviceGot.getCharacters(this.pageSize, this.currentPage)
      .pipe(first())
      .subscribe(
        data=> {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
        }
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  previous() {

    if (this.isFirstPage) {
      this.isLastPage = false;
      return;
    }

    this.currentPage = this.currentPage - 1;

    if (this.currentPage === 1) {
      this.isFirstPage = true;
    }

    this._serviceGot.getCharacters(this.pageSize, this.currentPage)
      .subscribe(
        data=> {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
        }
      );
  }

  next() {

    if (this.isLastPage) {
      return;
    }

    this.currentPage = this.currentPage + 1;

    if (this.currentPage !== 1) {
      this.isFirstPage = false;
    }

    this._serviceGot.getCharacters(this.pageSize, this.currentPage)
      .subscribe(
        data=> {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
        }
      );
  }
}
