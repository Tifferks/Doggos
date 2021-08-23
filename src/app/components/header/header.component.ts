import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: UserModel;
  constructor(private userService: RandomUserService ) { }

  ngOnInit(): void {
    this.userService.getRandomUser().subscribe(data => {
     this.user = data;
    });
  }

}
