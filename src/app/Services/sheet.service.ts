import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SheetService {
  constructor(private http: HttpClient) {}

  listSheet() {
    return this.http.get(`${environment.CONNECTION_URL}`);
  }
}
