import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {TipCalculator} from "../tipcalculator";
import {service_quality} from "../service_quality";
import {TipCalculatorService} from "../tipCalculatorService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './profile-editor.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent{
    tipobject !: TipCalculator;


    tipForm = new FormGroup({
      price: new FormControl('', [Validators.required]),
      radio_choice: new FormControl('', [Validators.required]),
      round: new FormControl('')
  });

  constructor(private service: TipCalculatorService, private router: Router) {
  }

  onSubmit(): void {
    this.service.submitTipCalculator(this.tipForm);
    this.router.navigate(["/output"]);
  }

  protected readonly service_quality = service_quality;
}
