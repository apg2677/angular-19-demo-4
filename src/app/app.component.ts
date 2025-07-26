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
  a: number = 10;
  b: number = 20;

  calc(): number {
    return this.a + this.b;
  }
}
