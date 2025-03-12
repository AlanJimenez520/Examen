import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packagelist',
  imports: [CommonModule],
  templateUrl: './packagelist.component.html',
  styleUrl: './packagelist.component.css',
  standalone: true,
  template: `
    <ul>
      <li *ngFor="let paquete of paquetes">{{ paquete }}</li>
    </ul>
  `,
})
export class PackagelistComponent {
  @Input() paquetes:{ nombre: string; detalles: string; precio: number }[] = [];
}
