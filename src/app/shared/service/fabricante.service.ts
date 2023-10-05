import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  private readonly API = 'http://localhost:8080/api/fabricantes';

  constructor(private httpClient: HttpClient) { }

  // Declarar os métodos da API REST
  //TODO

}
