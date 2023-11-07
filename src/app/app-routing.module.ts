import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterComponent} from "./character/character.component";
import {HomeComponent} from "./home/home.component";
import {BookComponent} from "./book/book.component";
import {HouseComponent} from "./house/house.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./AuthGuard";
import {HouseDetailsComponent} from "./house/house-details/house-details.component";

const routes: Routes = [ {
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard]
  },
  { path: 'login',
    component: LoginComponent
  },
  {
    path: 'character',
    component: CharacterComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'book',
    component: BookComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'house',
    component: HouseComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'house/:id',
    component: HouseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
