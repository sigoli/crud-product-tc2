import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.baseUrl}/`);
  }

  getOne(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.baseUrl}/`);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${environment.baseUrl}/`, product);
  }

  edit(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${environment.baseUrl}/`, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/`);
  }

}
