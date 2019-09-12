import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter : number = 0;
  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  countClick() {

    if (this.clickCounter < 10) {
      this.clickCounter += 1;
    } 

  }

  resetCounter(){
    this.clickCounter = 0;
  }

  setClasses() {
    let myClasses = {
      fine: this.clickCounter <= 7,
      near: this.clickCounter > 7,
      max: this.clickCounter == 10,
    };
    return myClasses;
  }

}
