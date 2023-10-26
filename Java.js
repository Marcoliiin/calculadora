function soma() {
    let soma = (parseFloat(n1) + parseFloat(n2))
    console.log(soma)
}

function subtracao() {
    let subtracao = (parseFloat(n1) - (n2))
    console.log(subtracao)
}

function multiplicacao() {
    let multiplicacao = (parseFloat(n1) * parseFloat(n2))
    console.log(multiplicacao)
}

function divisao() {
    let escolha = prompt("Qual número vai ser o seu divisor?\nDigite 1 para o divisor " + n1 + "\nDigite 2 para o divisor " + n2)
    switch (escolha) {
        case "1":
            var divisao1 = parseFloat(n2) / parseFloat(n1)
            if (divisao1 == 'Infinity') {
                alert("Divisões por zero não existem!")
            }
            else{
            console.log(divisao1)}
            break
        case "2":
            var divisao2 = parseFloat(n1) / parseFloat(n2)
            if (divisao2 == 0) {
                alert("Divisões por zero não existem!")
            }
            else{  
            console.log(divisao2)
            }
            break
    }
}

function apagar(){
    console.clear()
}

function fechar(){
    window.close()
}

let n1 = prompt("Digite o seu primeiro número: ")
let n2 = prompt("Digite o seu segundo número: ") 