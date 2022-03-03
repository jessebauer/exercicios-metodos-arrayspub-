// # Exercício 06

// ## Encontrar dono do pet

// Abaixo temos uma lista de cadastro de usuários e seus respectivos pets. Crie uma função que facilite encontrar o dono de um pet específico.



// Supondo que estamos buscando o pet `Max`, ao encontrar, o sistema deverá imprimir a mensagem `O dono(a) do(a) Max é o(a) João`, caso contrário, irá imprimrir `Que pena Max, não encontramos seu dono(a)`.

// Faça o teste com outros exemplos.

// Faça commit do resultado.

// ---

const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let usuario of usuarios) {
    if (usuario.pets.length > 0) {
        console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} ${usuario.pets.length > 1 ? 'pets' : 'pet'}`);

    } else {
        console.log(`Sou ${usuario.nome} e não tenho pet`)
    }
}