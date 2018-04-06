import {Routes} from '@angular/router'
import {InicioComponent} from './inicio/inicio.component'
import {AutoresComponent} from './autores/autores.component'

export const ROUTES : Routes = [
    {path: '', component: InicioComponent},
    {path: 'autores', component: AutoresComponent}
]