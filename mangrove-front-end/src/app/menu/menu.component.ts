import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nomeUsuario
  foto = environment.fotoUsuario

  listaCategorias: CategoriaModel[] 
  categoria: CategoriaModel = new CategoriaModel()
  idCategoria: number


  constructor(
    private router: Router,
    private categoriaService: CategoriasService,
  ) { }

  ngOnInit() {
    this.findAllCategorias()
  }


  sair(){
    this.router.navigate(['/entrar'])
    environment.tokenUsuario = ''
    environment.nomeUsuario = ''
    environment.fotoUsuario = ''
    environment.id = 0
  }

  findByIdCategorias(){
    this.categoriaService.getByIdCategorias(this.idCategoria).subscribe((resp: CategoriaModel)=>{
      this.categoria = resp
    }) 
}

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: CategoriaModel[])=>{
      this.listaCategorias = resp
    })
  }
}
