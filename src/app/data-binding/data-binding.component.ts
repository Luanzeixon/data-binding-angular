import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'; //string que vai ser interpolizada
  urlImagem: string = 'http://lorempixel.com.br/largura/altura'

  cursoAngular: boolean = true;

  getValor(){
    return 1; // metodo para ser interpolizada
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
