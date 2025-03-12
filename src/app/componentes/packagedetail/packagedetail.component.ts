import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packagedetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packagedetail.component.html',
  styleUrls: ['./packagedetail.component.css']
})
export class PackagedetailComponent {
  @Input() paquete!: { nombre: string; detalles: string; precio: number };
}
