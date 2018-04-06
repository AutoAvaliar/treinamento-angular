import { Component, OnInit, Input } from '@angular/core';
import {Autor} from './autor.model'

@Component({
  selector: '[bli-autor]',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  @Input() autor: Autor

  constructor() { }

  ngOnInit() {
  }

}
