import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../componentes/modelo/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  Url = 'http://localhost:8080/producto/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.Url + 'lista');
  }

  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.Url + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Producto> {
    return this.httpClient.get<Producto>(this.Url + `detailname/${nombre}`);
  }

  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.Url + 'create', producto);
  }

  public update(id: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(this.Url + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.Url + `delete/${id}`);
  }
}
