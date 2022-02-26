let productosFake = []

//Desafio 9: hacemos fetch de los productos fake
function fetchFakeProducts() {
    fetch('/api/productos-test')
    .then( response => response.json())
    .then(data => {
        productosFake=data
        renderFakeList(productosFake)
    })
}

function renderFakeList(data) {
    $("#list").html("")
    data.forEach(function(producto){
        $("#list").prepend(
            `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td><img src="${producto.foto}" class="img-thumbnail" width="100px" alt="No image"></td>
            `
        )
    })

}

fetchFakeProducts()