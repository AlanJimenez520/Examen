import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PackagedetailComponent } from './componentes/packagedetail/packagedetail.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'detalles', component: PackagedetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
