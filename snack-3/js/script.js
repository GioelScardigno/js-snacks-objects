// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// Crea un nuovo array con la lista dei mammiferi.
// [ 
//   { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ }, 
//   { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ }, 
//   { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ }, 
// ]

const animali = [
    { nome: "gatto", famiglia: "felidi", classe: "mammiferi" },
    { nome: "volpe", famiglia: "canidi", classe: "mammiferi" },
    { nome: "falco", famiglia: "falconidi", classe: "uccelli" },
]

const mammiferi = []

for(let i = 0; i < animali.length; i++){
    const animale = animali[i]
    if(animale.classe === "mammiferi"){
        mammiferi.push(animale)
    }
}

console.log(mammiferi);




