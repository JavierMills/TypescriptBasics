





class PersonaNormal{

    constructor(
        public nombre: string,
        public direction: string
        
        ){

    }
}

class Heroe extends PersonaNormal{
    constructor(
        public alterEfo: string,
        public edad: number,
        public nombreReal: string,
        ){

            //super llamar el c0nstructor de la clase a la cual extiende
            
            super(nombreReal, 'CDMX Miguel Hidalgo')
        }
}

const iroman = new Heroe('Iroman', 45 , 'Tony');

console.log(iroman);
