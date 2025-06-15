import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviarFormularioService {

  constructor() { }

  submitToBackend(data: string): string {
    console.log(`enviando para o backend: ${data}`);
    return `ok: ${data}`;
  }
}
