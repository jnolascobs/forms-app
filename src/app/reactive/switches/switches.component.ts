import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    conditions: [false, Validators.requiredTrue]
  })

  person = {
    gender: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({
      ...this.person,
      conditions: false
    });

    this.myForm.valueChanges.subscribe(({conditions, ...rest}) => {
      // delete form.conditions;
      this.person = rest;
    })
  }

  save() {
    const formValue = {...this.myForm.value};
    delete formValue.conditions;

    this.person = formValue;
    
  }

}
