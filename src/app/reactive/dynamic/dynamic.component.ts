import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [
  ]
})
export class DynamicComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['The Last Of Us', Validators.required],
      ['League of Legends', Validators.required]
    ], Validators.required)
  });

  newFav: FormControl = this.fb.control('', Validators.required);

  get favArray() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  addFavorite() {
    if (this.newFav.invalid) {
      return;
    }

    // this.favArray.push(new FormControl(this.newFav.value, Validators.required));
    this.favArray.push(this.fb.control(this.newFav.value, Validators.required));
    this.newFav.reset();
  }

  delete(index: number) {
    this.favArray.removeAt(index);
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
    
  }

}
