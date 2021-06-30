import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.baseUrl}/api/produtos`);
  }

  getOne(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.baseUrl}/api/produtos/${id}`);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${environment.baseUrl}/api/produtos/`, {
      titulo: product.titulo,
      descricao: product.descricao,
      preco: product.preco,
    });
  }

  update(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      `${environment.baseUrl}/api/produtos/${product.id}`,
      {
        titulo: product.titulo,
        descricao: product.descricao,
        preco: product.preco,
      }
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/api/produtos/${id}`);
  }
}
