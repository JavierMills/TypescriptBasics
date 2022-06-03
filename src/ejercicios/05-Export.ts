import { calcularImpuesto, Producto } from "./04-DesestructurtacionArre"


const carritoCompras: Producto [] = [
    {
        desc: 'Samsumng',
        precio: 450
    },
    {
        desc: 'Samsumng2',
        precio: 400
    }
]


const [total, isv] = calcularImpuesto(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);

