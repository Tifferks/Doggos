import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  apiEndPointUser = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getRandomUser(): Observable<UserModel>{
    return this.http.get<UserModel>(this.apiEndPointUser);
  }
}
