// # Exercício 02

// ## Divisão de grupos

// Crie uma função que receba dois parâmetros, o primeiro sendo um array de nomes e o segundo um número inteiro. 
// A função deverá dividir o array em grupos com a quantidade de nomes de acordo com o numero passado no segundo parâmetro. 
// Caso não seja possível separar em grupos iguais, o último grupo será o restante dos nomes. A função deve imprimir o resultado da divisão dos grupos.

// ```javascript=
// const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
// const tamanhoDoGrupo = 4;
// ```

// Para o exemplo acima deverá imprimir:

// ```
// Grupo 1: Juninho, Vidal, Guido, Dani.
// Grupo 2: Ruli, Diego.
// ```

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Jesse', 'Marcia', 'Roberto'];
const tamanhoDoGrupo = 4;

function divirdirGrupo(nomes, tamanho) {

    quantidadeDeGrupos = Math.floor(nomes.length / tamanho);
    ultimoGrupo = quantidadeDeGrupos + 1;
    grupos = []
    let i = 1
    let mensagemGrupo = [];
    while (i < quantidadeDeGrupos + 1) {
        grupos[i] = nomes.splice(0, 4)
        mensagemGrupo.push(`Grupo ${i}: ${grupos[i].join(", ")}.`)
        i++

    }
    //let mensagemGrupoFormatada = '';
    mensagemGrupo.push(`Grupo ${ultimoGrupo}: ${nomes}.`)
    //mensagemGrupoFormatada = mensagemGrupo.join('\b, ')
    //mensagemGrupoFormatada.slice(0, -1)

    return mensagemGrupo.join('\n') // \n = quebra uma linha
}

console.log(divirdirGrupo(nomes, tamanhoDoGrupo))