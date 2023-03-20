const data = new Date()
const anoAtual = data.getFullYear()

class aluno {
    constructor(matricula,nome, cidade, anoNascimento){
        this.matricula = matricula
        this.nome = nome
        this.cidade = cidade
        this.anoNascimento = anoNascimento

    }

    criar(){
        console.log(`Aluno ${this.nome} cadastrado com sucesso`)
        //return 1
    }

    consultar(){
        console.log(`Aluno ${this.nome} consultado com sucesso`)
    }

    atualizar(){
        console.log(`Aluno ${this.nome} atualizado com sucesso`)
    }

    apagar(){
        console.log(`Aluno ${this.nome} apagado com sucesso`)

    }
}

// Intanciando o Objeto da classe Aluno
let aluno1 = new aluno('11111', 'Antônio', 'Jundiaí',2000)
let aluno2 = new aluno('22222','Jóca','Iperó',2002)


// exibindo caracteristicas do Aluno1
console.log(aluno1.nome, aluno1.matricula, aluno1.cidade)


function calcularIdade(anoNascimento, anoAtual){
    let res = anoAtual - anoNascimento
    return res
}


console.log(`O Aluno tem ${calcularIdade(aluno1.anoNascimento,anoAtual)} anos de Idade`)

