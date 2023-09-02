var listagastos = [];

function ingresar() {
  var gasto = document.getElementById("gasto").value;
  var monto = document.getElementById("monto").value;

  if (gasto && monto) {
    var gastoFormateado = gasto + ": $" + monto;
    listagastos.push(gastoFormateado);
  }

  document.getElementById("gasto").value = "";
  document.getElementById("monto").value = "";
}

// Función para mostrar la lista de gastos
function mostrar() {
  alert("Lista de Gastos:\n" + listagastos.join("\n"));
}
