// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
// alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a
// benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.

const automobili = [
    {
        marca: "Corvette",
        modello: "C8 stingray",
        alimentazione: "benzina"
    },
    {
        marca: "Fiat",
        modello: "Panda 4x4",
        alimentazione: "diesel"
    },
    {
        marca: "Mini",
        modello: "One",
        alimentazione: "GPL"
    },
    {
        marca: "Tesla",
        modello: "Model 3",
        alimentazione: "elettrico"
    },
    {
        marca: "Volkswagen",
        modello: "Polo TGI",
        alimentazione: "metano"
    },
    {
        marca: "Chevrolet",
        modello: "Camaro SS",
        alimentazione: "benzina"
    },
    {
        marca: "Audi",
        modello: "S5",
        alimentazione: "diesel"
    },
    {
        marca: "Lancia",
        modello: "Ypsilon",
        alimentazione: "GPL"
    },
    {
        marca: "Porsche",
        modello: "Tycan",
        alimentazione: "elettrico"
    },
    {
        marca: "Skoda",
        modello: "Octavia",
        alimentazione: "metano"
    }
]

const autoBenzina = []
const autoDiesel = []
const altreAuto = []

for(let i = 0; i < automobili.length; i++){
    let car = automobili[i]
    if(car.alimentazione === "benzina"){
        autoBenzina.push(car)
    } else if (car.alimentazione === "diesel"){
        autoDiesel.push(car)
    } else {
        altreAuto.push(car)
    }
}

console.log(autoBenzina);
console.log(autoDiesel);
console.log(altreAuto);



