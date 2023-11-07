import {Component, OnInit, ViewChild} from '@angular/core';
import {ApigotService} from "../services/apigot.service";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from "@angular/material/table";
import {House} from "./house";
import {MatPaginator} from "@angular/material/paginator";
import {Subscription} from "rxjs";
import Utils from "../utils/utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./house.component.css']
})

export class HouseComponent implements OnInit {

  sub !: Subscription;
  houseColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<House>();
  expandedHouse!: MatTableDataSource<House>;
  pageSize: number= 50;
  pageSizeOption = [5, 10, 15, 50];
  applyFilter = Utils.applyFilter;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _serviceGot: ApigotService,
    private route: Router) {}

  ngOnInit() {
    this.sub = this._serviceGot.getHouses(this.pageSize)
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

  NavToHouseDetails(url: string) {
     const id = url.split('/').pop();
     this.route.navigate(['/house/' + id]);
  }
}
