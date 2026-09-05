import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  @Output() buscar = new EventEmitter<string>();

  valor = '';

  enviar(): void {
    const valor = this.valor.trim();

    if (valor) {
      this.buscar.emit(valor);
    }
  }
}
