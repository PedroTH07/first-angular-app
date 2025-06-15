import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviarFormularioService } from '../../services/enviar-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // services
  private enviarFormularioService = inject(EnviarFormularioService);

  // estados
  public nome: string = "pedro";
  public count: number = 0;
  public mostrarNome: boolean = false;
  public listItens: string[] = [
    "fernanda",
    "pedro",
    "joão",
  ]
  data!: string;

  // props
  @Input("name")
  minhaProps!: string;

  @Output()
  outputProps = new EventEmitter<string>();


  // métodos
  clickCount() {
    this.count += 1;
    this.mostrarNome = !this.mostrarNome;
  }

  submit() {
    this.outputProps.emit(this.nome);
    this.data = this.enviarFormularioService.submitToBackend("nome: José");
  }
}
