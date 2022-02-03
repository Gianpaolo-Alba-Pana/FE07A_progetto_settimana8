"use strict";
//FirstUser
class FirstUser {
    constructor(credito, nChiamate) {
        this.credito = credito;
        this.nChiamate = nChiamate;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(minDurata) {
        this.credito -= minDurata * 0.20;
        this.nChiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.nChiamate;
    }
    azzeraChiamate() {
        this.nChiamate = 0;
        console.log('numero chiamate : ' + this.nChiamate);
    }
}
//SecondUser
class SecondUser {
    constructor(credito, nChiamate) {
        this.credito = credito;
        this.nChiamate = nChiamate;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(minDurata) {
        this.credito -= minDurata * 0.20;
        this.nChiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.nChiamate;
    }
    azzeraChiamate() {
        this.nChiamate = 0;
        console.log('numero chiamate : ' + this.nChiamate);
    }
}
//ThirdUser
class ThirdUser {
    constructor(credito, nChiamate) {
        this.credito = credito;
        this.nChiamate = nChiamate;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(minDurata) {
        this.credito -= minDurata * 0.20;
        this.nChiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.nChiamate;
    }
    azzeraChiamate() {
        this.nChiamate = 0;
        console.log('numero chiamate : ' + this.nChiamate);
    }
}
//telefono 1 first user
let telefono1 = new FirstUser(0, 0);
telefono1.ricarica(70);
telefono1.ricarica(50);
telefono1.chiamata(60);
console.log('---PRIMO UTENTE---');
console.log('Valore della ricarica disponibile :' + telefono1.numero404() + '\u20ac');
console.log('Numero di chiamate: ' + telefono1.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate:");
telefono1.azzeraChiamate();
//telefono 2 second user
let telefono2 = new SecondUser(0, 0);
telefono2.ricarica(80);
telefono2.chiamata(75);
telefono2.chiamata(30.5);
console.log('---SECONDO UTENTE---');
console.log('Valore della ricarica disponibile :' + telefono2.numero404() + '\u20ac');
console.log('Numero di chiamate: ' + telefono2.getNumeroChiamate());
telefono2.azzeraChiamate();
//telefono 3 third user
let telefono3 = new ThirdUser(0, 0);
telefono3.ricarica(60);
telefono3.chiamata(20);
telefono3.chiamata(120);
telefono3.chiamata(40);
console.log('---TERZO UTENTE---');
console.log('Valore della ricarica disponibile :' + telefono3.numero404() + '\u20ac');
console.log('Numero di chiamate: ' + telefono3.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate:");
telefono3.azzeraChiamate();
