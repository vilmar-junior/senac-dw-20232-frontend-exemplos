import { FabricantesModule } from './fabricantes/fabricantes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Redireciona o caminho inicial para "produtos/lista"
  //{path: "", redirectTo: "produtos/lista", pathMatch: "full"},
  {
    path: 'produtos',
    loadChildren:() => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  },
  {
    path: 'fabricantes',
    loadChildren:() => import('./fabricantes/fabricantes.module').then(m => m.FabricantesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
