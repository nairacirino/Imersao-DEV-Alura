function converter() {
    var dolar= parseFloat(document.getElementById("dolar").value);
    var cotacao= 5.34 //25.09.2021
    console.log(dolar)

    var real= (dolar * cotacao)

    document.getElementById("resultado").innerHTML= "Valor em reais: R$ " + real + ".";
}