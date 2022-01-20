import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input('valor') valor: number = 0;

  @Output() mudouValor = new EventEmitter() //evenemitter do angula - emitir eventos para o component pai
  //OUTPUT - posso usar esse metodo fora daqui, esse evento é exposto pra fora, pra poder usar ele no component.html
  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor}) //emetir(passar) informacao pro component pai, pode ser objetos complexos
  }
  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }
  constructor() { }

  ngOnInit(): void {
  }

}
