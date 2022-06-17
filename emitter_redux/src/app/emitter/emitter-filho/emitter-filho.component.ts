import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emitter-filho',
  templateUrl: './emitter-filho.component.html',
  styleUrls: ['./emitter-filho.component.scss']
})
export class EmitterFilhoComponent implements OnInit {
  @Output() valorEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  setarValor(){
    this.valorEmitter.emit({val:'teste123'})
  }

}
