

function queTipoSoy<T>(argumento: T){
    return argumento
}

let soyString = queTipoSoy('Hola dsoy string');
let soyNumber = queTipoSoy(100);
let soyArray = queTipoSoy('Hola dsoy Array');

let soyExplicito= queTipoSoy<number>(100);

