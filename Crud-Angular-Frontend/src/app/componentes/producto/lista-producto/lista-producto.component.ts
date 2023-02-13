import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from '../../modelo/producto';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css'],
})
export class ListaProductoComponent implements OnInit {
  productos: Producto[] = [];
  toastr: any;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      (data) => {
        this.productos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  borrar(id: number) {
    this.productoService.delete(id).subscribe(
      (data) => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.cargarProductos();
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
}
