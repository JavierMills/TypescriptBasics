


interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    author: string,
    anio: number
}

const reproductor : Reproductor = {
    volumen: 50,
    segundo :80,
    cancion: 'The verve',
    detalles:{
        author: 'The verve',
        anio: 2009
    }

}

const { volumen, segundo, cancion, detalles} = reproductor;

const { anio, author} = detalles;

console.log('El volumen es :', volumen);
console.log('El segundo es :' ,segundo);
console.log('La Cancion es :', cancion);
console.log('El Autor es :',author);
console.log('El Anio es :', anio);


const dgbz: string[] = ['Goku', 'Krilion','Gohan'];

const [goku, krilin, gohan] = dgbz;

console.log("Personaje: " , goku);
console.log("Personaje: " , krilin);
console.log("Personaje: " , gohan);