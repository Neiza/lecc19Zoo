
var img = document.getElementsByClassName("animals");
var select = document.getElementById("selected");

select.onchange = function(){

      if (select.value == "blanco-negro"){
          for(var i = 0; i<img.length; i++){
              img[i].classList.remove("sepia");
              img[i].classList.remove("invertir-colores");
              img[i].classList.add("blanco-negro");
          }
      }

      if (select.value == "invertir-colores"){
          for(var i = 0; i<img.length; i++){
              img[i].classList.remove("blanco-negro");
              img[i].classList.remove("sepia");
              img[i].classList.add("invertir-colores");
          }
      }

      if (select.value == "sepia"){
          for(var i = 0; i<img.length; i++){
              img[i].classList.remove("blanco-negro");
              img[i].classList.remove("invertir-colores");
              img[i].classList.add("sepia");
          }
      }

      if (select.value == "original"){
          for(var i = 0; i<img.length; i++){
              img[i].classList.remove("blanco-negro");
              img[i].classList.remove("invertir-colores");
              img[i].classList.remove("sepia");
          }
      }
}
