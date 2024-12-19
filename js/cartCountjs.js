function addCount(id, price) {

    var value = document.getElementById(id).textContent
    value++
    document.getElementById(id).textContent = value

    var totalPriceforProduct = document.getElementById(`totalPriceFor${id}`)
    totalPriceforProduct.textContent = parseFloat(value * price).toFixed(2)

    var totalPrice = document.getElementById("totalPrice")
    totalPrice.innerHTML = parseFloat(Number(totalPrice.innerHTML) + price).toFixed(2)
}

function minesCount(id, price) {
    var value = document.getElementById(id).textContent
    if (value > 1) {
        value--
        document.getElementById(id).textContent = value
        var totalPriceforProduct = document.getElementById(`totalPriceFor${id}`)
        totalPriceforProduct.textContent = parseFloat(value * price).toFixed(2)

        var totalPrice = document.getElementById("totalPrice")
        totalPrice.innerHTML = parseFloat(Number(totalPrice.innerHTML) - price).toFixed(2)
    }

}

function deleteProduct(pid,id) {
    pid.style.display = "none"

    var totalPriceOfProduct = document.getElementById(`totalPriceFor${id}`).textContent
    
    var totalPrice = document.getElementById("totalPrice")
    totalPrice.innerHTML = parseFloat(Number(totalPrice.innerHTML) - Number(totalPriceOfProduct)).toFixed(2)


    var data = localStorage.getItem("cart")
    data = data.split(",")
    var index = data.indexOf(`${id}`)
    Array.from(data);
    data.splice(index, 1);
    localStorage.setItem("cart",data)
    

}