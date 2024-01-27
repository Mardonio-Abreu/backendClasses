/*
TO-DO
Se creará una clase que permitirá llevar cuentas individuales
según cada responsable.

Deﬁnir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas
las instancias de contador creadas.
*/

class Counter {
    
    static globalCounter = 0;
    
    constructor(name){
        this.name = name;
        this.counter = 0;
        Counter.globalCounter++;
        }

    

    count = () => {
        this.counter++;
    }

    printCounter = () => {
        console.log(`I am ${this.name}, my counter is ${this.counter}, and the global counter is ${Counter.globalCounter}`)
    }
}

//Tests

let counter1 = new Counter('Brain');

counter1.count();
counter1.count();
counter1.count();

counter1.printCounter();

let counter2 = new Counter('Pinky');

counter2.count();
counter2.count();
counter2.count();
counter2.count();

counter2.printCounter();

let counter3 = new Counter('Mandy');

counter3.count();
counter3.count();

counter3.printCounter();
