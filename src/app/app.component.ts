import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  nm: string = '';
  em: string = '';
  emailIsValid: boolean = false;
  formSubmitted: boolean = false;

  checkEmailValidation(em: string): void {
    if (em.includes('@') && em.includes('.com')) {
      this.emailIsValid = true;
    } else {
      this.emailIsValid = false;
    }
  }
  showMessage() {
    if (this.nm && this.emailIsValid) this.formSubmitted = true;
  }
}
