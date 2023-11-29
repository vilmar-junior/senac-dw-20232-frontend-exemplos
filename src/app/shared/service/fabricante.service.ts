import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fabricante } from '../model/fabricante';

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  private readonly API = 'http://localhost:8080/api/fabricantes';

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Array<Fabricante>> {
    return this.httpClient.get<Array<Fabricante>>(this.API);
  }

  salvar(fabricante: Fabricante): Observable<Fabricante> {
    return this.httpClient.post<Fabricante>(this.API, fabricante);
  }

  atualizar(fabricante: Fabricante): Observable<Fabricante> {
    return this.httpClient.put<Fabricante>(this.API, fabricante);
  }
 
  pesquisarPorId(id: number): Observable<Fabricante> {
    return this.httpClient.get<Fabricante>(this.API + '/' + id);
  }

  getTipos(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(this.API + '/tipos');
  }
}
