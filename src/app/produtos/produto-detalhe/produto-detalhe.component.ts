import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/shared/model/produto';
import { FabricanteService } from 'src/app/shared/service/fabricante.service';
import { ProdutoService } from 'src/app/shared/service/produto.service';
import Swal from 'sweetalert2';
import { Fabricante } from './../../shared/model/fabricante';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  public idProduto: number;
  public produto: Produto = new Produto();
  public fabricantes: Fabricante[] = [];
  public dataMinima: string;
  public dataMaxima: string;

  @ViewChild('ngForm') 
  public ngForm: NgForm;

  constructor(private produtoService: ProdutoService,
              private fabricanteService: FabricanteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataMinima = "2023-10-02";
    this.dataMaxima = "2023-10-25";

    this.route.params.subscribe(params => {
      this.idProduto = params['id']; //'id' é o nome do parâmetro definido na rota

      if(this.idProduto){
        this.buscarProduto();
      }
    });

    this.fabricanteService.listarTodos().subscribe(
      resultado => {
        this.fabricantes = resultado;
      },
      erro => {
        Swal.fire("Erro", "Erro ao buscar os fabricantes: " + erro, 'error');
      }
    );
  }
  salvar(form: NgForm){
    if(form.invalid){
      Swal.fire("Erro", "Formulário inválido!", 'error');
      return;
    } 
    
    if(this.idProduto){
      this.inserirProduto();
    }else{
      this.atualizarProduto()
    }
  }

  inserirProduto(){
    //é EDIÇÃO
    this.produtoService.atualizar(this.produto).subscribe(
      sucesso => {
        Swal.fire("Sucesso", "Produto atualizado!", 'success');
        this.produto = new Produto();
      },
      erro => {
        Swal.fire("Erro", "Erro ao atualizar o produto: " + erro, 'error');
      }
    );
  }

  atualizarProduto(){
    //é CADASTRO
    this.produtoService.salvar(this.produto).subscribe(
      sucesso => {
        //usar um componente de alertas (importar no app.module.ts)
        //https://github.com/sweetalert2/ngx-sweetalert2
        //Swal.fire(titulo, texto, 'warning');
        Swal.fire("Sucesso", "Produto cadastrado!", 'success');
        this.produto = new Produto();
      },
      erro => {
        Swal.fire("Erro", "Erro ao cadastrar o produto: " + erro, 'error');
      }
    );
  }

  buscarProduto(){
    this.produtoService.pesquisarPorId(this.idProduto).subscribe(
      resultado => {
        this.produto = resultado;
      },
      erro => {
        Swal.fire("Erro", "Erro ao buscar o produto com id ("
                      + this.idProduto + ") : " + erro, 'error');
      }
    );
  }

  voltar(){
    this.router.navigate(['/produtos/lista/']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
