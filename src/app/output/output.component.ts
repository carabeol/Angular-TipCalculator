import { Component } from '@angular/core';
import {TipCalculator} from "../tipcalculator";
import {TipCalculatorService} from "../tipCalculatorService";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  tipCalculator: TipCalculator;
  constructor(tip: TipCalculatorService) {
    this.tipCalculator = tip.tipCalculator;
    this.tipCalculator.tip = this.tipCalculator.cost * (this.tipCalculator.service /100);
    if  (this.tipCalculator.round_up){
      this.tipCalculator.tip= Math.ceil(this.tipCalculator.tip);
    }
    else {
      this.tipCalculator.tip= Math.round(this.tipCalculator.tip *100)/100;
    }
    if (this.tipCalculator.service===15){
      this.tipCalculator.service_quality = 'OKAY'
    }
    else if (this.tipCalculator.service===18){
      this.tipCalculator.service_quality = 'GOOD'
    }
    else {
      this.tipCalculator.service_quality = 'EXCELLENT'
    }
  }




}
