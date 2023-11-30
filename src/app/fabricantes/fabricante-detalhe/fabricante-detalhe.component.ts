import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fabricante } from 'src/app/shared/model/fabricante';
import { FabricanteService } from 'src/app/shared/service/fabricante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fabricante-detalhe',
  templateUrl: './fabricante-detalhe.component.html',
  styleUrls: ['./fabricante-detalhe.component.scss']
})
export class FabricanteDetalheComponent implements OnInit {

  public idFabricante: number;
  public fabricante: Fabricante = new Fabricante();
  public tiposFabricante: string[];

  @ViewChild('ngForm')
  public ngForm: NgForm;

  constructor(private fabricanteService: FabricanteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idFabricante = params['id'];

      if(this.idFabricante){
        this.buscarFabricante();
      }

      this.buscarTiposFabricante();
    });
  }

  buscarTiposFabricante(){
    this.fabricanteService.getTipos().subscribe(
      resultado => {
        this.tiposFabricante = resultado;
      },
      erro => {
        Swal.fire("Erro", "Erro ao atualizar o fabricante: " + erro, 'error');
      }
    );
  }

  salvar(form: NgForm){

    if(form.invalid){
      Swal.fire("Atenção", "Revise, por gentileza", 'warning');
      return;
    }

    if(this.idFabricante){
      this.atualizarFabricante()
    }else{
      this.inserirFabricante();
    }
  }

  atualizarFabricante(){
    //é EDIÇÃO
    this.fabricanteService.atualizar(this.fabricante).subscribe(
      sucesso => {
        Swal.fire("Sucesso", "Fabricante atualizado!", 'success');
        this.fabricante = new Fabricante();
      },
      erro => {
        Swal.fire("Erro", "Erro ao atualizar o fabricante: " + erro, 'error');
      }
    );
  }

  limpar(){
    this.fabricante = new Fabricante();
  }

  inserirFabricante(){
    //é CADASTRO
    this.fabricanteService.salvar(this.fabricante).subscribe(
      sucesso => {
        Swal.fire("Sucesso", "Fabricante cadastrado!", 'success');
        this.fabricante = new Fabricante();
      },
      erro => {
        Swal.fire("Erro", "Erro ao cadastrar o fabricante: " + erro, 'error');
      }
    );
  }

  buscarFabricante(){
    this.fabricanteService.pesquisarPorId(this.idFabricante).subscribe(
      resultado => {
        this.fabricante = resultado;
      },
      erro => {
        Swal.fire("Erro", "Erro ao buscar o fabricante com id ("
                      + this.idFabricante + ") : " + erro, 'error');
      }
    );
  }
}
