const bts = document.querySelectorAll(".bts");
const principal = document.querySelector("#num");
const resultField = document.querySelector("#result");
bts.forEach(bt => {
    bt.addEventListener("click", typing);
});

function typing() {
    let num = this.value;
    let valor = principal.value;
    let arr = [];

    function isVazio(){
        if (valor && !isNaN(valor.substr(-1))){
            principal.value += num;
        }
    }
    function equal(){
        let arr = [];
        if(valor.includes("*")){
            arr = valor.split("*");
            let currentResult = arr.reduce((acc, cur) => acc*cur);
            resultField.innerHTML = currentResult;
        }
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
        "%": function(){
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
        }

    }
    if(!isNaN(num)){
        if(isNaN(valor)){
            if(valor.includes("+")){
                principal.value += num;
                let arr = principal.value.split("+");
                let currentResult = arr.reduce((acc, cur) => parseInt(acc)+parseInt(cur));
                resultField.innerHTML = currentResult;
            }
        }else{
            principal.value += num;
        }
    } else{
        clicks[num]();
    }

}