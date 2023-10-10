import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PasswordService } from 'src/app/password-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private passwordService: PasswordService) { }
  form: FormGroup = new FormGroup({
    'password': new FormControl(null)
  });

  get password() {
    const control = this.form.get('password');
    return control ?? new FormControl();
  }
  getSectionClass(index: number) {
    const passwordValue = this.password.value || ''
    const strength = this.passwordService.getPasswordStrength(passwordValue)
    if(passwordValue.length > 0 && passwordValue.length < 8) 
    return 'red'
    switch (strength) {
      case 'green':
        return 'green'
      case 'yellow':
        return index <= 1 ? 'yellow' : 'gray'
      case 'red':
        return index == 0 ? 'red' : 'gray'
      default:
        return 'gray'

    }
  }
}
