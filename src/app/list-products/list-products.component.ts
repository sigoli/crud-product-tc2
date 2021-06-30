import { IProduct } from './../../interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products: IProduct[];

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAll().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        alert('Erro ao listar Produtos, tente novamente');
      }
    );
  }

  edit(id: string): void {
    this.router.navigate(['/edit'], {
      queryParams: { id },
    });
  }

}
