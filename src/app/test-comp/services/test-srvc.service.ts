import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestSrvcService {

  constructor() { }

  // returns random number between 0 and 10
  getRandomNum() {
    return Math.floor(Math.random() * Math.floor(10));
  }
}


