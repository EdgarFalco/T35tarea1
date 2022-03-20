import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = '';

  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';

  listaClientes: Array<object> = [];

  anadir() {
    this.listaClientes.push({
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo,
    });
  }
}
