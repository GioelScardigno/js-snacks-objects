// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Partendo da questo, crea quindi un nuovo array inserendo, per ogni
// persona, una frase (stringa) con il nome e cognome e l’indicazione se può
// guidare, in base all’età.

const persone = [
    {
        nome: "Gioel",
        cognome: "Scardigno",
        eta: 20
    },
    {
        nome: "Charles",
        cognome: "Leclerc",
        eta : 27
    },
    {
        nome: "Peter",
        cognome: "Parker",
        eta: 17
    }
]
const puoGuidare = []

for(let i = 0; i < persone.length; i++){
    const persona = persone[i]
    if(persona.eta < 18){
        puoGuidare.push(`${persona.nome} ${persona.cognome} non può guidare dato che ha solo ${persona.eta} anni.`)
    } else {
        puoGuidare.push(`${persona.nome} ${persona.cognome} può guidare dato che ha ${persona.eta} anni.`)
    }
}

console.log(puoGuidare);



