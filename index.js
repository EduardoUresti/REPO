const articuloIn = document.getElementById('articulo');
const precioIn = document.getElementById('precio');
const calcularB = document.getElementById('calculartotal');
const listaA = document.getElementById('lista-articulos');
const totalE = document.getElementById('total');

let total = 0;

calcularB.addEventListener('click', () => {
    const articulo = articuloIn.value;
    const precio = parseFloat(precioIn.value);

    if (articulo && !isNaN(precio)) {
        const item = document.createElement('li');
        item.innerHTML = `${articulo} - $${precio.toFixed(2)}`;
        listaA.appendChild(item);
        
        total += precio;
        totalE.textContent = `Total: $${total.toFixed(2)}`;
        
        articuloIn.value = '';
        precioIn.value = '';
    }
});