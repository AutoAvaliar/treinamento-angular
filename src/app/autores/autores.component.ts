import {Component, OnInit} from '@angular/core';
import {Autor} from './autor/autor.model'
import {AutoresService} from './autores.service'
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
    selector: 'bli-autores',
    templateUrl: './autores.component.html',
    styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

    autores: Autor[] = []
    form: FormGroup;
    formBuilder: FormBuilder;

    constructor(private autoresService: AutoresService) {}

    ngOnInit() {
        this.buscarAutores()
        let formBuilder = new FormBuilder
        this.form = formBuilder.group({
            'nome': formBuilder.control('')
        })
    }

    buscarAutores() {
        this.autoresService.buscarAutores().subscribe(autores => this.autores = autores)
    }

    excluirAutor(id: number) {
        this.autoresService.excluirAutor(id).subscribe(resultado => {
            if (resultado.sucesso) {
                this.buscarAutores()
            } else {
                alert(resultado.mensagem)
            }
        })
    }

    salvarAutor() {
        this.autoresService.salvarAutor(JSON.stringify(this.form.getRawValue())).subscribe(resultado => {
            if (resultado.sucesso) {
                this.limparFormulario()
                this.buscarAutores()
            } else {
                alert(resultado.mensagem)
            }
        })
    }

    limparFormulario() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).setValue('')
        });
    }

}
