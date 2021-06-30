import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../services/product.service';
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

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly productService: ProductService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      id: [null],
      titulo: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
      preco: [null, [Validators.required]],
    });

    this.route.queryParams.subscribe((params) => {
      if (params.id) {
        this.editMode = true;
        this.setEditMode(params.id);
      }
    });
  }

  setEditMode(id: number): void {
    this.productService.getOne(id).subscribe(
      (response) => {
        this.productForm.get('id').setValue(response.id);
        this.productForm.get('titulo').setValue(response.titulo);
        this.productForm.get('descricao').setValue(response.descricao);
        this.productForm.get('preco').setValue(response.preco);
      },
      (error) => {
        alert('Produto não encontrado');
        this.router.navigate(['/all']);
      }
    );
  }

  ngOnInit(): void {}

  deleteProduct(): void {
    this.productService.delete(this.productForm.get('id').value).subscribe(
      (response) => {
        this.router.navigate(['/all']);
      },
      (error) => {
        this.error = true;
      }
    );
  }

  createProduct(): void {
    if (!this.validateForm()) {
      return;
    }
    this.productService.create(this.productForm.value).subscribe(
      (response) => {
        this.router.navigate(['/all']);
      },
      (error) => {
        this.error = true;
      }
    );
  }

  updateProduct(): void {
    if (!this.validateForm()) {
      return;
    }
    this.productService.update(this.productForm.value).subscribe(
      (response) => {
        this.router.navigate(['/all']);
      },
      (error) => {
        this.error = true;
      }
    );
  }

  validateForm(): boolean {
    if (this.productForm.valid) {
      return true;
    }
    this.productForm.markAllAsTouched();
    return false;
  }
}
