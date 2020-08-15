
const menuIcono = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-navegacion');

//console.log(menuNav)
//console.log(menuIcono)

menuIcono.addEventListener('click',()=>{
    //esto es para que cada que presiones el boton
    //meta la calse y se vea el menu o no
    menuNav.classList.toggle('spread')
});


/* esta parte del codigo hace que si presionas el boton
de menu al seleccionar cualquier parte menos lo morado del menu
se quite y te lleve a esa parte, si presionas lo morado
no hace nada, debes presionar cualquier otra parte*/
window.addEventListener('click',(e)=>{
    if(menuNav.classList.contains('spread') && e.target != menuNav
        && e.target != menuIcono){

            menuNav.classList.toggle('spread')
        }
});

