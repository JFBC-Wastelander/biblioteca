let conversor

console.log("f para entradaFahrenheit, c para celsius, k para kelvin")
process.stdin.on("data", function (data){
    let entrada_usuario = data.toString().trim()

    if (!conversor){
        if(entrada_usuario == "f" || entrada_usuario == "c" || entrada_usuario == "k") {
        conversor = entrada_usuario
        console.log("agora indique a temperatura")
        } else {
            console.log("indique um valor correto")
        }
    } else {
        let temperatura = Number(entrada_usuario)
        if (Number.isNaN(temperatura)) {
            console.log("digite valor válido")
        } else {
            switch (conversor) {
                case "f":
                    console.log(`em celsius é: ${(temperatura - 32) / 1.8}`)
                    console.log(`em kelvin é: ${(temperatura - (32 * 5) / 9 + 273.15)}`)
                break;
                    
                case "c":
                    console.log(``)
                break;
                        
                case "k":
                break;
        }
            
            }
        }

    })
