function mensaje() {
    document.getElementById("enviado").innerHTML = "Mensaje Eviado !!! Puedes hablarme por whatsapp tambien 1134137575"
}
document.getElementById("boton").onclick = function () {
    mensaje();
}




const skills = document.querySelector("#tec");







const t2 = document.querySelector('#t2'),
    foco = document.querySelector('#foco'),
    audio = new Audio();


 apagarPrender();
function apagarPrender() {
    foco.addEventListener('click',off);
};
function off() {
    if (foco.textContent === "on") {

        foco.textContent = "off",
        foco.innerHTML = ('<i class="fas fa-lightbulb"></i>'),
        t2.style.backgroundImage="url('imagenes/fondo3.jpg')",
        t2.style.backgroundRepeat='repeat-x';
        audio.src = 'sonidos/son.mp3';
audio.play()

    } else {
        t2.style.backgroundColor='black';
        t2.style.backgroundRepeat='no-repeat';
        t2.style. backgroundImage = 'none';
        foco.textContent = "on"
        audio.src = 'sonidos/son2.mp3';
        audio.play()
    }
  
}

// Instantiate Scrolls
var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

if (document.querySelector('[data-easing]')) {
    var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});

    var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});
    var easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', {easing: 'easeInCubic'});
    var easeInQuart = new SmoothScroll('[data-easing="easeInQuart"]', {easing: 'easeInQuart'});
    var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', {easing: 'easeInQuint'});

    var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});
    var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {easing: 'easeInOutCubic'});
    var easeInOutQuart = new SmoothScroll('[data-easing="easeInOutQuart"]', {easing: 'easeInOutQuart'});
    var easeInOutQuint = new SmoothScroll('[data-easing="easeInOutQuint"]', {easing: 'easeInOutQuint'});

    var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {easing: 'easeOutQuad'});
    var easeOutCubic = new SmoothScroll('[data-easing="easeOutCubic"]', {easing: 'easeOutCubic'});
    var easeOutQuart = new SmoothScroll('[data-easing="easeOutQuart"]', {easing: 'easeOutQuart'});
    var easeOutQuint = new SmoothScroll('[data-easing="easeOutQuint"]', {easing: 'easeOutQuint'});
}