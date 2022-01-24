import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('contrutor');
   }
   //Dentro desse metodo se faz a chamada do servidor para obter os dados
  ngOnInit(): void {
  }

   ngOnChanges(){
    this.log('changes');
   }
   ngDoCheck(){
    this.log('check');
   }
   ngAfterContentInit(){
    this.log('acint');
   }
   ngAfterContentChecked(){
    this.log('acchecked');
   }
   ngAfterViewInit(){
    this.log('avinit');
   }
   ngAfterViewChecked(){
    this.log('avchecked');
   }
   ngOnDestroy(){
    this.log('destroy');
   }
   private log(hook: string){
     console.log(hook);
   }

}
