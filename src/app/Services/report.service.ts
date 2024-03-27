import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Pages/users/user";
import {Report} from "../Pages/reports/report";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'http://localhost:3000/reports';
  constructor(private httpClient: HttpClient) { }


  getReports(){
    return this.httpClient.get<Report[]>(this.apiUrl);
  }
  // createUser = (createdData: Report) => this.httpClient.post<Report>(`${this.apiUrl}`, createdData);
  // getUser = (userId: number) => this.httpClient.get<User>(`${this.apiUrl}/${userId}`);
  // updateUser = (updateData: User, userId: number) => this.httpClient.put<User>(`${this.apiUrl}/${userId}`, updateData);
  // deleteUser= (id: number) => this.httpClient.delete(`${this.apiUrl}/${id}`);
}
