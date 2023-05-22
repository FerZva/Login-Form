let compras = "🛒"

function hacerLaCompra(callback) {
    setTimeout(function() {
        compras += "📦"
        callback()
    }, 2000)
    compras += "📦"
}

hacerLaCompra(function() {
    console.log(compras)
})
console.log(compras)