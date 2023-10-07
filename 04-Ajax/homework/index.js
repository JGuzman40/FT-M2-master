const boton = $("#boton");
const lista = $("#lista");
const botonBuscar = $("#search");
const inputBuscar = $("#input");
const spanBuscar = $("#amigo");
const botonDelete = $("#delete");
const inputDelete = $("#inputDelete");
const spanDelete = $("#success");
const URL = "http://localhost:5000/amigos";

function getFriends() {
  lista.empty();

  $.get(URL, function (response) {
    for (let i = 0; i < response.length; i++) {
      const friend = response[i];
      const li = "<li>" + friend.id + "-" + friend.name + "</li>";
      lista.append(li);
    }
  });
}

function getFriend() {
  spanBuscar.empty();
  const input = inputBuscar.val();
  if (isNaN(Number(input))) alert("Solo numeros");
  else if (input > 6 || input < 1) alert("Ese id no existe");
  else {
    $.get(`${URL}/${input}`, function (response) {
      spanBuscar.text(response.name);
    });
  }
}

function deleteFriend() {
  const input = inputDelete.val();
  $.ajax({
    url: `${URL}/${input}`,
    type: "DELETE",
    success: function () {
      spanDelete.text("Amigo borrado con exito");
      getFriends();
    },
  });
}

boton.click(getFriends);
botonBuscar.click(getFriend);
botonDelete.click(deleteFriend);