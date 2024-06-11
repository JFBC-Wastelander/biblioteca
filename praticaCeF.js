let temperatura
let usuario

console.log("Insira uma temperatura")
process.stdin.on("data", function(data){
    if (temperatura === undefined) {
        temperatura = Number(data.toString().trim())
        console.log("Escolha se você quer converter para Celsius, Fahrenheit ou Kelvin: ")
    } else {
        usuario = data.toString().trim()
        if (usuario.toLowerCase() === "celsius") {
            let celsius = ((temperatura - 32) * 5) / 9;
            console.log(`A temperatura convertida para Celsius é: ${celsius.toFixed(2)}°C`)
        } else if (usuario.toLowerCase () === "fahrenheit") {
            let fahrenheit = (temperatura * 9) / 5 + 32
            console.log(`A temperatura convertida para Fahrenheit é: ${fahrenheit.toFixed(2)}°F`)
        } else if (usuario.toLowerCase() === "kelvin") {
            let kelvin = (temperatura - 32) * 5 / 9 + 273.15
            console.log(`A temperatura convertida para Kelin é: ${kelvin.toFixed(2)}K`)
        } else {
            console.log("Opção inválida. Por favor escolha entre Celsius, Fahrenheit ou Kelvin")
        }
    }
})