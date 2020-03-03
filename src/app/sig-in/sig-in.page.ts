import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { AlertController } from '@ionic/angular';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


export class FormFieldPrefixSuffixExample {
  hide = true;
}

@Component({
  selector: 'app-sig-in',
  templateUrl: './sig-in.page.html',
  styleUrls: ['./sig-in.page.scss'],
})
export class SigINPage implements OnInit {

 
  matcher = new MyErrorStateMatcher();
  registerForm: FormGroup;
  

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
  ) {

    this.registerForm = this.createRegisterFrom();

    
   }

  

  ngOnInit() {
  }

  private createRegisterFrom() {
    return this.formBuilder.group({
      
      correo: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      pass: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), Validators.required])],
      rpass: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), Validators.required])],
      codigo: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(3), Validators.pattern('[A-Za-z0-9 áéíóúñ]*')])],
      terminos: [true, Validators.compose([Validators.pattern('true'), Validators.required])],
      notificacion: [false],
    },
    {validators: this.checkPasswords}
    );
  }

  checkPasswords(group: FormGroup) { 
  let pass = group.controls.pass.value;
  let confirmPass = group.controls.rpass.value;
  return pass === confirmPass ? null : { notSame: true }
}






  openTerminos (t) {
    console.log("abrir terminos")
    if (t == 1) {
      console.log("Entra a terminos 1");
    } else {
      console.log("Entra a terminos 2");
    }
  }

  registro()
  {
    
    if (this.registerForm.valid)
    {
      console.log("Registro Exitoso--->",this.registerForm.value)
    }
    else{

      console.log("Errores en el formulario")

    }
  }

}
