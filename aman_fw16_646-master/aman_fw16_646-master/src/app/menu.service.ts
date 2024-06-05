
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'https://freeapi.miniprojectideas.com/api/zomato/GetAllMenu';

  constructor(private http: HttpClient) { }

  getAllMenus(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

