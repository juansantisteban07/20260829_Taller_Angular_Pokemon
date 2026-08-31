import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // Guarda lo que escribe el usuario (enlazado con [(ngModel)] en el HTML).
  texto = '';

  // Mensaje de error propio del formulario (por ejemplo: campo vacío).
  errorFormulario = '';

  // Evento que envía el valor de búsqueda hacia el componente principal.
  @Output() buscar = new EventEmitter<string>();

  // Se ejecuta al pulsar el botón o al presionar Enter.
  onBuscar(): void {
    const valor = this.texto.trim();

    // Validación: evitamos búsquedas vacías.
    if (valor === '') {
      this.errorFormulario = 'Por favor, escribe un nombre o ID.';
      return;
    }

    // Si es válido, limpiamos el error y emitimos el valor.
    this.errorFormulario = '';
    this.buscar.emit(valor);
  }
}
