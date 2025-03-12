import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PackagedetailComponent } from './componentes/packagedetail/packagedetail.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'detallesViajes', component: PackagedetailComponent },
];
