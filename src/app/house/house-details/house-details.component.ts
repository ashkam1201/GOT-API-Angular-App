import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApigotService} from "../../services/apigot.service";
import {Subscription} from "rxjs";
import {House} from "../house";

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  private routeSub!: Subscription;
  house?: House | null;
  id: string = "";

  constructor(private _serviceGot: ApigotService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this._serviceGot.getHouseDetails(this.id)
      .subscribe((data)=> {
          this.house = data;
        }
      )
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
