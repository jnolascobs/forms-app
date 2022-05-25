import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: 'RTX 3060',
    price: 10,
    supplies: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls.product?.invalid && this.myForm?.controls.product?.touched;
  }

  validPrice(): boolean {
    return this.myForm?.controls.price?.invalid && this.myForm?.controls.price?.touched;
  }

  // save(myForm: NgForm) {}
  save() {
    // console.log(this.myForm);
    console.log('Post correcto');

    this.myForm.resetForm({
      product: 'Producto',
      price: 0,
      supplies: 0
    });  
  }

}
