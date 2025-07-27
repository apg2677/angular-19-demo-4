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
  employees = [
    {
      id: 1,
      name: 'UserA',
      salary: 45000,
    },
    {
      id: 2,
      name: 'UserB',
      salary: 55000,
    },
    {
      id: 3,
      name: 'UserC',
      salary: 65000,
    },
  ];
}
