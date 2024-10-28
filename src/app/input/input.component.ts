import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {TipCalculator} from "../tipcalculator";
import {service_quality} from "../service_quality";

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
  tipobject : TipCalculator = new TipCalculator();


  tipForm = new FormGroup({
    price: new FormControl('', [Validators.required]),
    radio_choice: new FormControl('', [Validators.required]),
    round: new FormControl('')  // Requiere al menos 6 caracteres
  });

  // Método para enviar el formulario
  onSubmit() {
    if (this.tipForm.valid) {
      console.log(this.tipForm.value);  // Imprime el valor del formulario si es válido
    }
  }

  protected readonly service_quality = service_quality;
}
