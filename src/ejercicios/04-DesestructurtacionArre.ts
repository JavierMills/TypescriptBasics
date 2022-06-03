export interface Producto {
    desc: string,
    precio: number,
}

const telefono :Producto ={
    desc: 'Iphone',
    precio: 450
}

const tableta : Producto = {
    desc: 'Ipad',
    precio: 490
}

export function calcularImpuesto(productos: Producto[]): [number, number] {
    
    let total = 0;

    productos.forEach(({precio}) => {
        total += precio
    })


    return [total, total * 0.15]

   

}

const articulos =[telefono,tableta];


const [total, isv] = calcularImpuesto( articulos);


console.log('Total ', total);
console.log('ISV: ',isv);
