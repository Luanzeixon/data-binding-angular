import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  //styles, mesma coisa que o templates usando o ''
  styles: [
    `
    .highlight{
    background-color: yellow;
    font-weight: bold;
  }

    `
  ]

})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'; //string que vai ser interpolizada
  urlImagem: string = 'http://lorempixel.com.br/largura/altura'

  cursoAngular: boolean = true;

  valorAtual: String = '';
  valorSalvo: String = '';

  isMouseOver:boolean = false;

  getValor(){
    return 1; // metodo para ser interpolizada
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('botao clicado');
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value); //Evento.taget é do tipo htmlinputelemnet ai precisa fazer isso pra acessar as informações, lembrando que target era onde tava valor no log da pagina
  }
  valorSalvar(valor:any){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver; //negando o valor, se tiver true vai falso e se falso true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
