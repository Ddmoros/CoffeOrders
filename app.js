const emailTextBox = document.getElementById('email-text-box')
const textBox = document.getElementById('text-box')
const sizeOrder = document.getElementById('size')
// const priceOrder = document.getElementById('price')
const orderButton = document.getElementById('order-button')

orderButton.addEventListener('click', function() {
    const url = 'https://troubled-peaceful-hell.glitch.me/orders'

    let request = new XMLHttpRequest()
    request.open('POST', url)   
    request.setRequestHeader('content-type', "application/json") 



    request.addEventListener('load', function() {
        const result = JSON.parse(this.responseText)
        if(result.success) {
            alert(result.message)
        }

    })

    const body = {
        email: emailTextBox.value,
        type: emailTextBox.value,
        size: sizeOrder.value,
        // price: priceOrder.value
    }

    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json')
})