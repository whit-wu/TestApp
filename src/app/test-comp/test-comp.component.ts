import { Component, OnInit } from '@angular/core';
import { TestSrvcService } from './services/test-srvc.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  randomNumber : number;
  overFive : boolean;
  
  constructor(testSrvcService: TestSrvcService) { 
    this.randomNumber = testSrvcService.getRandomNum();
  }

  ngOnInit() {
    this.checkIfOverFive();
  }

  checkIfOverFive(){
    if (this.randomNumber > 5){
      this.overFive = true;
    }
    else {
      this.overFive = false;
    }
  }

}
