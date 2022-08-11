import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor: number = 0;
  destino: number = 0;

  constructor() {
  }

  @Output() aoTransferir = new EventEmitter<any>();

  transferir() {

    const valorTranf = { valor: this.valor, destino: this.destino }

    this.aoTransferir.emit(valorTranf);
  }

}
