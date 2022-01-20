import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  // inputs: ['nomeCurso:nome'] // da pra export pelo component
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = ''; //com o @input da pra expor uma propiedade 'nomeCurso' para o selector app-curso, podendo ultilizar o binding "[nome] - internamente usa nomeCurso e externamente nome"

  constructor() { }

  ngOnInit(): void {
  }

}
