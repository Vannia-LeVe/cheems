document.addEventListener("DOMContentLoaded",() =>{

const randomNumber=Math.floor(Math.random() *14)+1; 

//TODO: Eliminar antes de publicar
console.debug("Número Ranmdom:" + randomNumber) //Se nuestra en consola 

const imagenes= document.querySelectorAll(".cheems-card img")


imagenes.forEach((img , index)=> {
    const id= index + 1;
    img.dataset.id =id;

    img.addEventListener("click", ()=>{
        if(id==randomNumber){
            img.src= window.IMG_BAD
            alert("PERDISTE");
        }else {
            img.src= window.IMG_OK
            alert("GANASTEEEEEE");
        }



    })


})

})