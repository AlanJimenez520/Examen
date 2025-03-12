import { Component } from '@angular/core';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PackagelistComponent } from './componentes/packagelist/packagelist.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    PackagelistComponent,
    FooterComponent,
    CommonModule
  ],
})
export class AppComponent {
  title = 'Agencia de Viajes UTA';

  paquetes = [
    {id:1, nombre: 'Mazatlan', detalles: 'Viaje de 5 días y 4 noches. Incluye hospedaje en hotel 4 estrellas, desayuno buffet diario, transporte redondo y tour por el malecón.', precio: 13500 },
    {id:2, nombre: 'Tuxtla', detalles: 'Viaje de 4 días y 3 noches. Incluye hospedaje en hotel 3 estrellas, desayuno incluido, transporte redondo y visita guiada al Cañón del Sumidero.', precio: 8000 },
    {id:3, nombre: 'Guayabitos', detalles: 'Viaje de 3 días y 2 noches. Incluye hospedaje en hotel 3 estrellas, desayuno continental, acceso a la playa privada y transporte redondo.', precio: 3500 },
    {id:4, nombre: 'Cancún', detalles: 'Viaje de 6 días y 5 noches. Incluye hospedaje en hotel 5 estrellas, desayuno buffet y cenas incluidas, acceso a zonas de playa privadas, y transporte redondo.', precio: 15600 },
    {id:5, nombre: 'Puerto Vallarta', detalles: 'Viaje de 4 días y 3 noches. Incluye hospedaje en hotel 4 estrellas, desayuno buffet, transporte redondo, y tour por el malecón y playas cercanas.', precio: 9500 },
    {id:6, nombre: 'Oaxaca', detalles: 'Viaje de 5 días y 4 noches. Incluye hospedaje en hotel 3 estrellas, desayuno diario, transporte redondo, tour por el centro histórico y degustación de mezcal.', precio: 8700 }
  ];

  infoFooter = `Nos encontramos en República de Paraguay 124, Agricultura, 20234 Aguascalientes, Ags`;

  constructor(private router: Router) {}

  verDetalles(paquete: any) {
    this.router.navigate(['/detallesViajes'], { state: { paquete } });
  }
}
