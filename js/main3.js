"use strict"
$(document).ready(function () {
   
    var tema = $("#theme");
    $("#green").click(function () {
        tema.attr("href", "css/green.css");

    })
    $("#blue").click(function () {
        tema.attr("href", "css/blue.css");

    })

    $("#red").click(function () {
        tema.attr("href", "css/red.css");

    })


    //Make the DIV element draggagle:
    dragElement(document.getElementById("mydiv"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    var subir = document.querySelector(".subir")
    subir.addEventListener("click", function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 500)

        return false;

    })

    $("#form").submit(function (e) {
        e.preventDefault();
        var name = document.querySelector(".name").value;
        var email = document.querySelector(".email").value;
        var password = document.querySelector(".password").value
        if (name == null || name.length == 0) {
            alert("nombre incorrecto")
            return false;
        }

        if (email == null || email.length == 0) {
            alert("email incorrecto")
            return false;
        }

        if (password == null || password.length == 0) {
            alert("contraseña incorrecta")
            return false;
        }

        localStorage.setItem("nombre", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)

        var texto = document.querySelector("#sidebar p")
        texto.style.display = " none";
        $("#formulario").html("<p><strong><a  class='link' href='#'>Bienvenido" + " " + name + "(Cerrar sesion)</a></strong></p>")
        $(".link").click(function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        })

        
         

    })

   setInterval(function(){

    var reloj = moment().format('dddd , LL , LTS');
    
    $(".time ").html(reloj)

   },1000)
    















 })





