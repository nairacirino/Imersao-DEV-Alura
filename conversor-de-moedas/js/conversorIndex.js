/* GERANDO DATA ATUAL */
var date = new Date();
var day = String(date.getDate()).padStart(2, '0');
var month = String(date.getMonth() + 1).padStart(2, '0');
var year = date.getFullYear();
var currentDate = `${month}-${day - 1}-${year}`

/* RECEBENDO VALORES DO HTML */

var realInicial = 0
var dolarInicial = 0
var dolarFinal = 0
var realFinal = 0

/* RECUPERANDO COTAÇÃO DO BACEN */
var url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${currentDate}'&$top=100&$format=json`

function exchange() {

    dolarInicial = document.getElementById("dolarInput").value
    realInicial = document.getElementById("realInput").value

    if (dolarInicial == "" || dolarInicial == null) {
        dolarInicial = 0
    }

    if (realInicial == "" || realInicial == null) {
        realInicial = 0
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var ptax = data.value[0].cotacaoCompra

            /* CALCULANDO A CONVERSÃO */

            if (realInicial < 0 || dolarInicial < 0) {
                conversionResult.textContent = ("RESULTADO: Não é possível converter valores negativos!")
            } else {
                if (realInicial == 0 && dolarInicial > 0) {
                    dolarFinal = dolarInicial * ptax
                    conversionResult.textContent = (`RESULTADO: O valor convertido é de R$ ${dolarFinal.toFixed(2)}.`)
                } else {
                    if (realInicial > 0 && dolarInicial == 0) {
                        realFinal = realInicial / ptax
                        conversionResult.textContent = (`RESULTADO: O valor convertido é de US$ ${realFinal.toFixed(2)}.`)
                    } else {
                        if (realInicial == 0 && realInicial == 0) {
                            conversionResult.textContent = ("RESULTADO: Insira um valor inicial em Real ou Dólar")
                        } else {
                            if (realInicial > 0 && realInicial > 0) {
                                conversionResult.textContent = ("RESULTADO: Você só pode converter uma moeda por vez. Insira o valor a ser convertido em Real OU Dólar.")
                            }
                        }
                    }
                }
            }
        })
}
