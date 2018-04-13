import {Autor} from './autor/autor.model'
import {Injectable} from '@angular/core'
import {API_URL} from '../app.api'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class AutoresService {
    constructor(private http: HttpClient) {}

    buscarAutores(): Observable<Autor[]> {
        return this.http.get<Autor[]>(`${API_URL}/autores`)
    }

    excluirAutor(id: number): Observable<any> {
        return this.http.get<any>(`${API_URL}/autores/excluir/${id}`)
    }

    salvarAutor(dados: any): Observable<any> {
        return this.http.post<any>(`${API_URL}/autores/salvar`, dados)
    }


}
