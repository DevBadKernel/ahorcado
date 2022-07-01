const palabras = ['Aprendizaje','Secreto','Besar','Maldito','Llave','Situacion','Prescindible','Cuidar',
'Horroroso','Profetico','Evitar','Inflamable','Jarra','Humano','Botella','Marco','Dosis','Balistica',
'Celebridad','Furioso','Paciente','Prefabricado','Subasta','Placido','Instrumento','Entero','Desgarrador',
'Buscar','Polvo','Amputacion','Venir','Pareja','Rosa','Pinzon','Disfuncional','Robin','Acero','Puro','Rancio',
'Tembloroso','Inteligente','Empujar','Bear','Experimento','Plegable','Infantil','Soplar','Identico','Cercana',
'Arandano','Pasear','Repartir','Cauteloso','Dolorido','Profuso','Bateria','Diversion','Juego','Retener','Contenedor',
'Evocar','Retorcer','Reminiscente','Abandonado','Propaganda','Gestion','Estres','Inmolar','optimo','Cultural',
'Ingenioso','Infundir','Hervir','Astuto','Desertor','Camello','Pudrirse','Mutageno','Pegajoso','Analisis','Sollozar',
'Precioso','Ahogado','Infierno','Decimo','Caida','Educar','Adicto','Hija','Ver','Rosa','Axiomatico','Vomitar','Dudoso',
'Arrullo','Asociacion','Agradecer','Federacion','Galan','Desorientacion','Humedo','Reunion','Mejor','Absurdos','Fondo',
'Encontrar','Manzana','Encajar','Absorbible','Gobernar','Efusivo','Espiritual','Herida','Clasificar','Cordon',
'Cientifico','Ingenieria'];

var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o"];
$(document).ready(function(){
    letras.forEach((letra)=>{
        $(".teclado").append(`<button id="${letra}" class="letras">${letra}</button>`)
    })
    $(".letras").click(function(){
        const valor=$(this).text();
        jugada(valor);
    })
})

var palElegida = '';
var estadoPal = [];
var vidas = -1;
var imagenes = ['url(images/0.png)', 'url(images/1.png)', 'url(images/2.png)', 'url(images/3.png)', 'url(images/4.png)', 'url(images/5.png)', 'url(images/6.png)', 'url(images/7.png)', 'url(images/8.png)', 'url(images/9.png)'];

function palAleatoria(){
    var rand = Math.floor(Math.random()*palabras.length);
    palElegida = palabras[rand].toLowerCase();
    for (i = 0; i<palElegida.length; i++){
        estadoPal.push("_");
    }
    console.log(palElegida);
    setTimeout(()=>{document.getElementById("palabra").innerHTML=estadoPal.join("");},500)
}

palAleatoria();

function jugada(letra){
    var letraEncontrada = false;
    for (i = 0; i<palElegida.length; i++){
        if (palElegida[i] === letra){
            estadoPal[i] = letra;
            
            document.getElementById("palabra").innerHTML=estadoPal.join("");
            letraEncontrada = true;
    }
    }if (!letraEncontrada){
        vidas++;
        document.getElementById("derecha").style.backgroundImage=imagenes[vidas];
        console.log(vidas);
    }
    var letterDiss = document.getElementById(letra);
    letterDiss.setAttribute("disabled", "");
    if (vidas === 9){
        document.getElementById("finalPartida").innerText ="Te han ahorcado ;(";
        finalPartida();
    }
    if (estadoPal.join("") === palElegida){
        finalPartida();
    }
}

function finalPartida(){
    document.getElementById("finalPartida").style.zIndex = 0;
    var deshabilitar = document.querySelectorAll('button');
    deshabilitar.forEach
}
