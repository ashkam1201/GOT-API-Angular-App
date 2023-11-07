import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Character} from "../character/characters";
import {House} from "../house/house";
import {Book} from "../book/book";

@Injectable({
  providedIn: 'root'
})
export class ApigotService {

  constructor(private http: HttpClient) {}

    getCharacters(pageSize: number, page: number): Observable<Character[]> {
      const url = `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`
      return this.http.get<Character[]>(url);
    }
    getHouses(pageSize: number, page = 1): Observable<House[]> {
      const url = `https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`
      return this.http.get<House[]>(url);
    }
    getBooks(pageSize: number, page = 1): Observable<Book[]> {
      const url = `https://www.anapioficeandfire.com/api/books?page=${page}&pageSize=${pageSize}`
      return this.http.get<Book[]>(url);
    }

    getHouseDetails(id: string): Observable<House> {
      const url = `https://www.anapioficeandfire.com/api/houses/${id}`
      return this.http.get<House>(url);
    }
}
