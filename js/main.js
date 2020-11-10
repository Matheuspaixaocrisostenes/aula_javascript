function load(){
    alert("pagina carregada!")
}

function botao(){
    var a = document.getElementById("agradecimento")
    a.innerHTML = "Obrigado por clicar" 
}

function redirecionar(){
    window.open("https://google.com")
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui"
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


// function soma(n1,n2){
//     return n1+n2
// }

// function validadorIdade(idade){
//     var validador;
//     if(idade >= 18){
//         validador = true;
//     }else{
//         validador = false;
//     }
//     return validador
// }

// var idade = prompt("Qual a sua idade??");
// alert(validadorIdade(idade))

// alert(soma(1,9))


// var d = new Date();
// alert(d.getHours()+ ":" +d.getMinutes())


// var count = 0;
// while(count < 5){
//     console.log(count)
//     count++;
// }




// var idade = prompt("qual a sua idade??");
// if(idade>=18){
//     alert("maior de idade")
// }else{
//     alert("menor de idade")
// }



//var fruta = {nome:"Maçã" , cor:"Vermelha"};
//console.log(fruta.nome);

/*var lista = ["Maça" , "pera","laranj"];
//lista.push("uva");
//lista.pop();
//console.log(lista[0]);
console.log(lista.length)*/
