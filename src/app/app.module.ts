import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApigotService} from "./services/apigot.service";

import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { HouseComponent } from './house/house.component';
import { CharacterComponent } from './character/character.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {Ng2SearchPipeModule} from "ng2-search-filter";
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./AuthGuard";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatMenuModule} from "@angular/material/menu";
import { HouseDetailsComponent } from './house/house-details/house-details.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterComponent,
    HomeComponent,
    BookComponent,
    HouseComponent,
    LoginComponent,
    HouseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [ApigotService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
