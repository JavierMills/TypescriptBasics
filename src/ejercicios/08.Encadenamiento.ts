

interface Pasajero {
    nombre: string,
    hijos?: string[],
}

const pasajero1 = {
    nombre: 'Javier',
}


const pasajero2 = {
    nombre: 'Fernanda',
    hijos: ['Cielito', 'Javier']
}

const imprimirChild = ( pasajero : Pasajero): void => {

    const hijosNumber = pasajero.hijos?.length || 0;

    console.log( hijosNumber);

}

imprimirChild(pasajero1);