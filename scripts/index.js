document.addEventListener("DOMContentLoaded", function () {
  const btnAdd = document.getElementById("btnAdd");
  const btnPrint = document.getElementById("btnPrint");
  const btnClear = document.getElementById("btnClear");

  btnAdd.addEventListener("click", function (event) {
    fncCreateActividad(event);
  });

  btnPrint.addEventListener("click", function () {
    imprimirActividades();
  });

  btnClear.addEventListener("click", function () {
    limpiarFormulario();
  });
});

// Clase Activity
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

// Clase ActivityRepository (cambié el nombre para evitar conflictos)
class ActivityRepository {
  constructor() {
    this.activities = [];
  }

  getActivN() {
    return this.activities.length;
  }
  getActivND() {
    if (this.activities.length === 0) {
      // Si no hay actividades, devolver 1 como el próximo ID
      return 1;
    }

    // Obtener el ID máximo actual
    const maxId = Math.max(...this.activities.map((activity) => activity.id));

    // Devolver el próximo ID (ID máximo + 1)
    return maxId + 1;
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(id, title, description, imgUrl) {
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
    return activity;
  }

  // EXTRA CREDIT: Método para eliminar una actividad por su id
  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
    // console.log(`Se esta eliminando la actividad con id n° ${id}`);
    // alert(`Se esta eliminando la actividad con id n° ${id}`);
  }
}

function fncCreateActividad(event) {
  event.preventDefault(); // Cancelar la acción predeterminada del formulario

  // Tomando Valores
  const vtitulo = document.getElementById("titulo").value;
  const vurl = document.getElementById("url").value;
  const vdescripcion = document.getElementById("descripcion").value;

  //Verificacion ruptura
  if (vtitulo === "" || vurl === "" || vdescripcion === "") {
    alert(
      "Por favor revise los campos solicitados, alguno esta en blanco o es invalido"
    );
    return;
  }

  let nextID = activityRepository.getActivND();
  activityRepository.createActivity(nextID, vtitulo, vurl, vdescripcion);

  const trjActivItms = document.querySelector(".trj-activ-itms");

  const nuevaCaja = document.createElement("div");
  nuevaCaja.classList.add("boxtar");

  const imagen = document.createElement("img");
  imagen.src = vurl;
  imagen.alt = "Imagen de actividad de " + vtitulo; // Descripción de la imagen

  const descripcionArticle = document.createElement("article");
  descripcionArticle.textContent = vdescripcion;

  const parrafoTitulo = document.createElement("p");
  parrafoTitulo.appendChild(document.createTextNode(vtitulo));
  nuevaCaja.appendChild(parrafoTitulo);
  nuevaCaja.appendChild(document.createElement("br"));
  nuevaCaja.appendChild(imagen);
  nuevaCaja.appendChild(document.createElement("br"));
  nuevaCaja.appendChild(descripcionArticle);
  nuevaCaja.appendChild(document.createElement("br"));

  // Agregar botón para eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.classList.add("boxtardel");
  btnEliminar.innerHTML =
    '<div class="boxtardel"><img src="./assets/btns/trash.svg" alt="icono trash" /></div>';
  btnEliminar.setAttribute("data-id", nextID);
  console.log(`Muestra el id individual generado ${nextID}. `);

  btnEliminar.addEventListener("click", function () {
    const actividadId = btnEliminar.getAttribute("data-id"); // Obtén el ID desde el atributo 'data-id'
    console.log(`Muestra el id individual generado ${actividadId}. `);

    // Utilizar window.confirm para mostrar un cuadro de confirmación
    const confirmacion = window.confirm(
      `Esta seguro de eliminar esta actividad \n\n prox ID : ${nextID} \n titulo : ${vtitulo} \n titulo : ${vurl} \n titulo : ${vdescripcion} ?`
    );

    if (confirmacion) {
      activityRepository.deleteActivity(actividadId);
      nuevaCaja.remove();
      // alert(`La actividad con ID ${actividadId} ha sido eliminada.`);
      activityRepository.deleteActivity(actividadId);
    } else {
      // alert(`La actividad con ID ${actividadId} no ha sido eliminada.`);
    }
  });

  nuevaCaja.appendChild(btnEliminar);

  trjActivItms.appendChild(nuevaCaja);

  // alert(
  //   `Ustea creando una actividad con estas caracteristicas, \n prox ID : ${nextID} \n titulo : ${vtitulo} \n titulo : ${vurl} \n titulo : ${vdescripcion}`
  // );
}
