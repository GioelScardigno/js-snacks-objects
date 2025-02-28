// A partire da un array di stringhe, crea un secondo array formattando le
// stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const stringhe = ["pippo", "PLUTO", "Paperino"]
const strFormattate = []

for(let i = 0; i < stringhe.length; i++){
    const nome = stringhe[i]
    let nomeFormattato = formattaStringhe(nome)
    strFormattate.push(nomeFormattato)
}

function formattaStringhe(stringa) {
    return stringa.charAt(0).toUpperCase() + stringa.slice(1).toLowerCase();
}

console.log(strFormattate);


