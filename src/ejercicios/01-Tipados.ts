interface SuperHeroe  {
    nombre :string,
    edad: number,
    direction: Direction,

    mostrarDirection: () => string

}
interface Direction {
        calle: string,
        pais: string,
        ciudad: string,
}

const superHeroe: SuperHeroe = {
    nombre: 'Siderman',
    edad: 30,
    direction: {
        calle: 'Pocito',
        pais: 'Mex',
        ciudad: 'Cdmx',

    },

    mostrarDirection(){
        return this.nombre + ' , x' + this.direction.ciudad + ', ' + this.direction.pais
    }

}

const direction = superHeroe.mostrarDirection();
    
console.log(direction);

