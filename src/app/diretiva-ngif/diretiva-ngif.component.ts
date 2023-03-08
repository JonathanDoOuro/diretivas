import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit{

  cursos: string[] = [];

  mostrarCurso: boolean = this.cursos.length > 0;

  onMostrar() {
    this.mostrarCurso = !this.mostrarCurso;
  }
  constructor() {}

  ngOnInit(): void {

  }
}
