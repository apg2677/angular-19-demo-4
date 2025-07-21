import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { single } from 'rxjs';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: 'app.component.html',
  styles: ['span {margin:10px ;font-size: 18pt}'],
})
export class AppComponent {
  employees = signal<empInterface[]>([
    // { id: 1, name: 'EmployeeA', role: 'Admin' },
    // { id: 2, name: 'EmployeeB', role: 'HR' },
    // { id: 3, name: 'EmployeeC', role: 'Marketing' },
    // { id: 4, name: 'EmployeeD', role: 'Developer' },
    // { id: 5, name: 'EmployeeE', role: 'Team Lead' },
  ]);
}
