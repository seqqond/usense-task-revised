import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  easyPasswordRegExp = /^[a-zA-Z]+$|^[0-9]+$|^[!@#\$%\^&\*\(\)_\+\-=\[\]{}|;:'",<>\.?/\\~]+$/
  mediumPasswordRegExp = /^(?:(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]{}|;:'",<>\.?/\\~])|(?=.*[0-9])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]{}|;:'",<>\.?/\\~])).+$/
  strongPasswordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$/
  getPasswordStrength(password: string): 'gray' | 'red' | 'green' | 'yellow' {
    if (!password || password.length == 0) return 'gray'
    if (password.length < 8) return 'red'
    if (this.strongPasswordRegExp.test(password)) return 'green'
    if (this.mediumPasswordRegExp.test(password)) return 'yellow'
    if (this.easyPasswordRegExp.test(password)) return 'red'
    return 'red'
  }
}
