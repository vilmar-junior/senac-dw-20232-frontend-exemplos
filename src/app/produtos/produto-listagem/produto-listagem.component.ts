import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoService } from 'src/app/shared/produto.service';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss']
})
export class ProdutoListagemComponent implements OnInit {

  //Lista de produtos que fará o binding com a tabela na view (html)
  public produtos: Array<Produto> = new Array();

  constructor(private produtoService: ProdutoService){
  }

  ngOnInit(): void {
    //Similar ao método main() do Java
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.produtoService.listarTodos().subscribe(
      resultado => {
        this.produtos = resultado;
      }, 
      erro => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }

  editar(id: number){
    //TODO: Implementar a edição do produto
    console.log('Editando o produto de id: ', id);
  }
}
