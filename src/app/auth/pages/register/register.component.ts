import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { nameSurnamePattern, emailPattern, cantBeStrider } from '../../../shared/validator/validations';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(this.validatorService.nameSurnamePattern) ] ],
    email: ['', [ Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [this.emailValidator] ],
    username: ['', [ Validators.required, this.validatorService.cantBeStrider ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    confirmPassword: ['', [ Validators.required ] ]
  },
  {
    validators: [this.validatorService.equalFields('password', 'confirmPassword')]
  });

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'El correo es obligatorio'
    } else if (errors?.pattern) {
      return 'El correo no tiene un formato correcto'
    } else if (errors?.takenEmail) {
      return 'El correo ya está en uso'
    }

    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Ellie Jackson',
      email: 'test1@test.com',
      username: 'ellie_J85',
      password: '123456',
      confirmPassword: '123456'
    })
  }

  noValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }



  // emailRequired() {
  //   return this.myForm.get('email')?.errors?.required && this.myForm.get('email')?.touched;
  // }

  // emailFormat() {
  //   return this.myForm.get('email')?.errors?.pattern && this.myForm.get('email')?.touched;
  // }

  // emailTaken() {
  //   return this.myForm.get('email')?.errors?.takenEmail && this.myForm.get('email')?.touched;
  // }

  submitForm() {
    console.log(this.myForm.value);
    
    this.myForm.markAllAsTouched();

  }

}
