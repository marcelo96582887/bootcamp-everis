/*

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.info('O programa irá calcular a divisão entre os 2 numeros informados.');

rl.question('Entre com o primeiro número: ', (n1) => {
    if(n1 === 0 || n1 == undefined || n1 == null || n1.length === 0 || Number.isNaN(parseFloat(n1)) === true){
        console.error('Divisão impossível, primeiro número não informado!!!');
        rl.close();
    }else{
        rl.question('Entre com o segundo número: ', (n2) => {
            if(n2 === 0 || n2 == undefined || n2 == null || n2.length=== 0 || Number.isNaN(parseFloat(n2))){
                console.error('Divisão impossível, segundo número não informado!!!');
            }else{
                try{
                    let resultado = n1 / n2;
                    if(resultado == undefined){
                        console.error('Divisão impossível de %s por %s', n1, n2);
                    }else{
                        console.info('O resultado de %s divido por %s é %d', n1, n2, resultado);
                    }
                }catch{
                    console.error('Divisão impossível de %s por %s', n1, n2);
                }
            }
            rl.close();
        })        
    }
});

*/

var limit = '3';
const gets = ['3 -2', '-8 0', '0 8'];

gets.forEach(el => {
    if (el.split(' ').length < 2) {
        console.log('divisao impossivel');
    } else if (el.split(' ').length > 2) {
        console.log('divisao impossivel');
    } else {
        el.split(' ').reduce((n1, n2) => {
            
            if (n1 == undefined || n1 == null || n1.length === 0 || Number.isNaN(parseFloat(n1)) === true) {
                console.log('divisao impossivel');
            } else if (n2 === '0' || n2 == undefined || n2 == null || n2.length === 0 || Number.isNaN(parseFloat(n2)) === true) {
                console.log('divisao impossivel');
            } else {
                let result = parseFloat(parseFloat(n1) / parseFloat(n2)).toFixed(1);
                console.log(result);
            }
        });
    }
    
})
