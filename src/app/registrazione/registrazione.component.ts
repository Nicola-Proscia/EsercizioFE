import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  registrazioneForm!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrazioneForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      codicefiscale: ['', [Validators.required, Validators.pattern('[A-Z0-9]{16}')]],
      eta: ['', [Validators.required, Validators.min(18)]],
      indirizzo: ['', Validators.required],
      paese: ['', Validators.required],
      cap: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.registrazioneForm.valid) {
      this.isSubmitting = true;
      // finta simulazione di chiamata al backend
      setTimeout(() => {
        // click al submit
        this.isSubmitting = false;
        this.registrazioneForm.reset();
      }, 2000); // piccolo ritardo
    }
  }
}


