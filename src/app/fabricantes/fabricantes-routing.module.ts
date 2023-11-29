import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FabricanteDetalheComponent } from './fabricante-detalhe/fabricante-detalhe.component';

const routes: Routes = [
  {path: 'detalhe', component: FabricanteDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricantesRoutingModule { }
