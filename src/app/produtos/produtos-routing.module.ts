import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'lista', component: ProdutoListagemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
