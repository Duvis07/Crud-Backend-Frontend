import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './componentes/producto/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './componentes/producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/producto/editar-producto/editar-producto.component';
import { DetalleProductoComponent } from './componentes/producto/detalle-producto/detalle-producto.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//External Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    DetalleProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
