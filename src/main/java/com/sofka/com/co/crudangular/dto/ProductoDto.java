package com.sofka.com.co.crudangular.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;


public class ProductoDto {

 private int id;
    @NotBlank
    private String nombre;
    @Min(0)
    private Float precio;

    public ProductoDto() {
    }

    public ProductoDto(int id, String nombre, Float precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Float getPrecio() {
        return precio;
    }

    public void setPrecio(Float precio) {
        this.precio = precio;
    }
}
