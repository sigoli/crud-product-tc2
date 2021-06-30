import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  error = false;
  editMode = false;

  productForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      id: [null],
      titulo: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
      preco: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  deleteProduct(): void {}

  saveProduct(): void {
    if (!this.validateForm()) return;
  }

  validateForm(): boolean {
    if (this.productForm.valid) {
      return true;
    }
    this.productForm.markAllAsTouched();
    return false;
  }
}
