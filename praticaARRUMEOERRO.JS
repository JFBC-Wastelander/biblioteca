// Existem 13 erros neste script, encontre e corrija

const dia = true //primeiro erro: se for definido dia = false, deveria ser var ou let no lugar de const.

if(dia) {
    console.log("Bom dia");
} else (!dia) // segundo erro: a chave depois do (!dia) não foi aberta.
// terceiro erro: deveria ser if else
    console.log("Boa noite");
}

dia = false; // quarto erro: como dia foi escrito como constante, ele não receberá o valor "false", uma vez que constante é fixa e ele sempre será "true".

let aluno { //quinto erro: quando se atribui um objeto, deve-se aplicar sinal de igual após a constante.
    frio = true, // sexto erro: quando se cria um objeto, as attribuições são seguidas por dois pontos, não pelo sinal de igual.
    molhado = true, //sétimo erro: quando se cria um objeto, as attribuições são seguidas por dois pontos, não pelo sinal de igual.
}

if(aluno.molhado EE aluno.frio EE !dia) { //oitavo e nono erro: no lugar de usar EE, seria correto aplicar && para ambas condições ou || para uma das condições
    //décimo: foi aberto chave mas não foi fechada depois.
    console.log("Vou usar um casaco");

    let casacos = ["casaco1"; "casaco2"; "casaco3"]; //décimo primeiro erro: arrays são separados por vírgulas.
    
    for (let i = 1; i <= casacos.length; i++) { //décimo segundo erro: não é necessáriamente um erro porém "i" deve iniciar com o 0 (primeiro valor do array)
        //décimo terceiro erro: o correto deve ser: i < casacos.length
        console.log("Ponha " + casacos[i] + " tira " + casacos[i]); 
        
    }