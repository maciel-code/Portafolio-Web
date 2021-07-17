function mensaje() {
    document.getElementById("enviado").innerHTML = "Mensaje Eviado !!! Puedes hablarme por whatsapp tambien 1134137575"
}
document.getElementById("boton").onclick = function () {
    mensaje();
}

const t2 = document.querySelector('#t2'),
    foco = document.querySelector('#foco');


    apagarPrender();
function apagarPrender() {
    foco.addEventListener('click',off);
};

function off() {
    if (foco.textContent === "on") {
        foco.textContent = "off"
        t2.style.backgroundImage="url('imagenes/fondo3.jpg')";
        t2.style.backgroundRepeat='repeat-x';

    } else {
        t2.style.backgroundColor='black';
        t2.style.backgroundRepeat='no-repeat';
        t2.style. backgroundImage = 'none';
        foco.textContent = "on"
    }
  
}