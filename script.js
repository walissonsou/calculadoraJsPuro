
function tighten(numbers) {
    let num = document.getElementById('display').innerHTML //serve para inserir um caracter no id DISPLAY da calculadora
    document.getElementById('display').innerHTML = num + numbers;
}
function limpar(){
    document.getElementById('display').innerHTML = ""
}
function onetoone(){
    let retorno = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = retorno.substring(0, retorno.length - 1);
     // substring() e a propriedade length para extrair os últimos caracteres de uma string específica. 
}
function calcular(){
    let resultadofinal = document.getElementById('display').innerHTML;
    if(display)
    {
        document.getElementById('display').innerHTML = eval(resultadofinal)  //  função Eval avalia o expressão de cadeia de caracteres e retorna seu valor.
    }
}