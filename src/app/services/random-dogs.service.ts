import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DogModel } from '../models/DogModel';

@Injectable({
  providedIn: 'root'
})
export class RandomDogsService {
  apiEndPointDog = 'https://random.dog/woof.json';

  constructor(private http: HttpClient) { }
  getRandomDog(): Observable<DogModel>{
    return this.http.get<DogModel>(this.apiEndPointDog);
    }
  }
