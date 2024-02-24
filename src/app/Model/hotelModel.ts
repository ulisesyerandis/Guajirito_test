class Hotel {
    img: string;
    nombre: string;
    precioPorNoche: number;
    cantidadEstrellas: number;
    ciudad: string;

    constructor(img: string, nombre: string, precioPorNoche: number, cantidadEstrellas: number, ciudad: string) {
        this.img = img;
        this.nombre = nombre;
        this.precioPorNoche = precioPorNoche;
        this.cantidadEstrellas = cantidadEstrellas;
        this.ciudad = ciudad;
    }
}

// const hotelEjemplo = new Hotel("imagen.jpg", "Hotel Ejemplo", 100, 4, "Ciudad Ejemplo");

// console.log(hotelEjemplo);