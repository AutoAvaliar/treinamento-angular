import { Component, OnInit } from '@angular/core';
import {Autor} from './autor/autor.model'
import {AutoresService} from './autores.service'

@Component({
  selector: 'bli-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

   autores: Autor[] = []
    
  constructor(private autoresService: AutoresService) { }

  ngOnInit() {
      this.autoresService.buscarAutores().subscribe(autores => this.autores = autores)
  }

}
