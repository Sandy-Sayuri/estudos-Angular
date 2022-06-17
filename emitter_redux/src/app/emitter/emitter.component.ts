import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {

  valor: string

  constructor() { }

  ngOnInit(): void {
  }

  setarValor(val: any){    
    this.valor=val.val
  }
}
