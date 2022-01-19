import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: String = 'abc';
  pessoa:any = { //objeto TypeScript
    nome: 'def',
    idade: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
