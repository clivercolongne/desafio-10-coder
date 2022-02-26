const socket = io.connect()

//Para el chat
function sendMessage(e) {
    let datetime = new Date().toLocaleString('en-GB', {timezone: 'UTC'})

    const mensaje = {
        author: {
            id: $("#id").val(),
            nombre: $("#nombre").val(),
            apellido: $("#apellido").val(),
            edad: $("#edad").val(),
            alias: $("#alias").val(),
            avatar: $("#avatar").val()
        },
        text: $("#text").val(),
        datetime: datetime
    }

    socket.emit('newMessage', mensaje)
    $("#text").val("")
    return false
}

socket.on('messages', data => {
    render(data)
})

//Para el form de ingreso de datos
//Emito cuando haga click en Guardar
$("#form").submit( function(e) {
    e.preventDefault()
    data = {
        title: $("#title").val(),
        price: $("#price").val(),
        thumbnail: $("#thumbnail").val()
    }
    
    socket.emit("newProduct", data)
})

//Escucho nuevos cambios del socket products y vuelvo a cargar listado
socket.on('products', data => {
    fetchProducts()
})