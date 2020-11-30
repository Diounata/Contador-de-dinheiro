var button_verificar = document.getElementById('button-verificar')
var button_reset = document.getElementById('button-reset')
button_verificar.addEventListener('click', verificar)
button_reset.addEventListener('click', resetar)

function verificar() {
    var resultado = document.getElementById('resultado')
    var input_dinheiro = Number(document.getElementById('input-money').value)
    var dinheiro_amostra = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01]
    var dinheiro = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var contagem = input_dinheiro

    resultado.innerHTML = `<br/> <p> Valor inserido: R$${input_dinheiro.toFixed(2).replace('.', ',')} </p> <br/>`

    // Adicionar quantidade de cédulas/moedas que foram definidas
    for (var pos in dinheiro) {
        while (contagem.toFixed(2) >= dinheiro_amostra[pos]) {
            dinheiro[pos]++
            contagem = contagem.toFixed(2) - dinheiro_amostra[pos]
        }


        // Inserir as cédulas/moedas na página
        for (var timer = dinheiro[pos]; timer > 0; timer = timer - 1) {
            resultado.innerHTML += `<img src="imagens/dinheiro_valor_${dinheiro_amostra[pos]}.jpg"/> `
        }
    }
}

function resetar() {
    resultado.innerHTML = ``
}

// Cédulas: 200[0], 100[1], 50[2], 20[3], 10[4], 5[5], 2[6]
// Moedas: 1[7], 0,50[8], 0,25[9], 0,10[10], 0,05[11], 0,01[12]