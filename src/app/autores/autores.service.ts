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
}
