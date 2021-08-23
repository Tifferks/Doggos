import { Component, OnInit } from '@angular/core';
import { DogModel } from 'src/app/models/DogModel';
import { RandomDogsService } from 'src/app/services/random-dogs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dogCollection: DogModel[] = [];

  constructor(private dogService: RandomDogsService) { }

  ngOnInit(): void {
    for (let index = 7; index > 0; index--) {
      this.dogService.getRandomDog().subscribe(data => {
        this.dogCollection.push(data);
        console.log(this.dogCollection);
      });
    }
  }

}
