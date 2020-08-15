const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const menuIcono2 = document.querySelector('.menu');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click',(e)=>{
        aparecerImagen(imagen.getAttribute('src'))
    });
});

//para cerrar si picamos en otro lado fuera de la imagen
contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        menuIcono2.style.opacity = '1';
    }
});


const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    //aparece la imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menuIcono2.style.opacity = '0'
};