import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { FabricanteDetalheComponent } from './fabricante-detalhe/fabricante-detalhe.component';
import { FabricantesRoutingModule } from './fabricantes-routing.module';


@NgModule({
  declarations: [
    FabricanteDetalheComponent,
  ],
  imports: [
    CommonModule,
    FabricantesRoutingModule,
    FormsModule,
  ]
})
export class FabricantesModule { }
