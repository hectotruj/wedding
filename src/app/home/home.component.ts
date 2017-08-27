import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countdown:string = '';
  ngOnInit() {
    this.getCountdown();
  }
  getCountdown() {
    let dateDif = Math.ceil((new Date("2017-11-25").getTime() - new Date().getTime())/ (1000*60*60*24));
    console.log(dateDif);
    if(dateDif > 0) 
      this.countdown = dateDif + ' Days Left!';
    else if (dateDif == 0)
      this.countdown = 'It\'s our wedding day!';
  }
}
