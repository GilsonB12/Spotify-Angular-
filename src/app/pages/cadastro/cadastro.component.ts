import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { UsuarioService } from './usuario.service';

import { Cadastro } from './cadastro';
import { Usuario } from './usuario';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: Cadastro = new Cadastro;

  cadastros: Array<any> = new Array();

  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private http: HttpClient) { }
  

  ngOnInit() {
    this.get();

    this.usuarioForm = this.fb.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
    });
  }

  get(){
    this.usuarioService.get().subscribe(cadastros => {
      this.cadastros = cadastros;
    })
  }

  Salvar(){  
    console.log(this.cadastro)
    this.usuarioService.Cadastrar(this.cadastro).subscribe(cadastro => {
      this.cadastro = new Cadastro();
      
    })
  }
}