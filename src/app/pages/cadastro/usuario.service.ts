import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { USUARIOS } from './usuario-mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from './cadastro';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:3000/cadastro/";

  Cadastrar(cadastro: Cadastro): Observable<any> {
    return this.http.post(this.url, cadastro);
  }
  get(): Observable<any>{
    return this.http.get(this.url);
  }
  
}
