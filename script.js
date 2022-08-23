const bts = document.querySelectorAll(".bts"); //todos os botões
const principal = document.querySelector("#expression");
const resultField = document.querySelector("#result");
bts.forEach(bt => {
    bt.addEventListener("click", typing);
});
let currentResult = 0;

function typing() {
    let caractere = this.value;
    let valor = principal.value;
    let arr = [];
    // checa se campo principal está vazio
    function isVazio(){
        if (valor && !isNaN(valor.substr(-1))){
            principal.value += caractere;
        }
    }
    function equal(){
        if(valor.includes("*")){
            arr = valor.split("*");
            //interrompe calculo se array só tiver um elemento
            if(!arr[1]){
                return;
            }
            currentResult = arr.reduce((acc, cur) => parseFloat(acc)*parseFloat(cur));
        }
        else if(valor.includes("+")){
            arr = principal.value.split("+");
            if(!arr[1]){
                return;
            }
            currentResult = arr.reduce((acc, cur) => parseFloat(acc)+parseFloat(cur));
        }
        else if(valor.includes("-")){
            arr = principal.value.split("-");
            if(!arr[1]){
                return;
            }
            currentResult = arr.reduce((acc, cur) => parseFloat(acc)-parseFloat(cur));
        }
        else if(valor.includes("/")){
            arr = principal.value.split("/");
            if(!arr[1]){
                return;
            }
            currentResult = arr.reduce((acc, cur) => parseFloat(acc)/parseFloat(cur));
        }
        else if(valor.includes("%")){
            arr = principal.value.split("%");
            if(!arr[1]){
                return;
            }
            currentResult = arr.reduce((acc, cur) => parseFloat(acc)*(parseFloat(cur)/100));
        }
        resultField.textContent = `${valor} = ${currentResult}`;
        principal.value = "";
    }


    const clicks = {
        "+": function(){
            isVazio();
        },
        "C": function(){
            principal.value = valor.substr(0, valor.length - 1);
        },
        "-": function(){
            isVazio();
        },
        "/": function(){
            isVazio();
        },
        "*": function(){
            isVazio();
        },
        ".": function(){
            isVazio();
        },
        "=": function(){
            equal();
        },
        "%": function(){
            isVazio();
        }

    }
    // document.addEventListener("keypress", (e) => {
    //     if(e.key === "Enter"){
    //         equal();
    //     }
    // });
    // checa se caractere digitado é um Numero
    if(!isNaN(caractere)){
        if(isNaN(valor)){
            if(valor.includes("+")){
                principal.value += caractere;
            }
            if(valor.includes("-")){
                principal.value += caractere;
            }
            if(valor.includes("*")){
                principal.value += caractere;
            }
            if(valor.includes("/")){
                principal.value += caractere;
            }
            if(valor.includes("%")){
                principal.value += caractere;
            }
        }else{
            principal.value += caractere;
        }
    } else{
        if(isNaN(valor) && caractere != "=" && caractere != "C" && caractere != "."){
            return;
        }
        clicks[caractere]();
    }
    
}