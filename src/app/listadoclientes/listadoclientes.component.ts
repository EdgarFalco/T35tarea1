import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadoclientes',
  templateUrl: './listadoclientes.component.html',
  styleUrls: ['./listadoclientes.component.css'],
})
export class ListadoclientesComponent implements OnInit {
  @Input() listaClientes: any;

  constructor() {}

  ngOnInit(): void {}
}
