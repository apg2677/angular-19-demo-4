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
  subjectList = [
    {
      subCode: 101,
      name: 'JavaScript',
    },
    {
      // subCode: 102,
      name: 'C++',
    },
    {
      subCode: 103,
      name: 'NestJS',
    },
  ];
}
