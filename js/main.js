$(document).ready(function () {
  //slider
  if (window.location.href.indexOf("index") > -1) {
    $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 1200
    });


    $(document).ready(function () {
      $('.slider').bxSlider();
    });
  }




  var post = [

    {
      title: "Prueba de titulo",
      date: "publicado " + new Date(),
      content: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ac lectus accumsan, suscipit justo sit amet, pellentesque ex. Duis id justo tortor. Nam bibendum malesuada fames ac turpis egestas. Nunc cursus dui nec ex volutpat, eget sodales arcu luctus.Curabitur enim lectus, vulputate non erat sed, cursus vestibulum ante. Vestibulum nec convallis  neque, quis pretium eros. "
    },
    {
      title: "Prueba de titulo",
      date: "publicado " + new Date(),
      content: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ac lectus accumsan, suscipit justo sit amet, pellentesque ex. Duis id justo tortor. Nam bibendum malesuada fames ac turpis egestas. Nunc cursus dui nec ex volutpat, eget sodales arcu luctus.Curabitur enim lectus, vulputate non erat sed, cursus vestibulum ante. Vestibulum nec convallis  neque, quis pretium eros. "
    },
    {
      title: "Prueba de titulo",
      date: "publicado " + new Date(),
      content: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ac lectus accumsan, suscipit justo sit amet, pellentesque ex. Duis id justo tortor. Nam bibendum malesuada fames ac turpis egestas. Nunc cursus dui nec ex volutpat, eget sodales arcu luctus.Curabitur enim lectus, vulputate non erat sed, cursus vestibulum ante. Vestibulum nec convallis  neque, quis pretium eros. "
    },
    {
      title: "Prueba de titulo",
      date: "publicado " + new Date(),
      content: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ac lectus accumsan, suscipit justo sit amet, pellentesque ex. Duis id justo tortor. Nam bibendum malesuada fames ac turpis egestas. Nunc cursus dui nec ex volutpat, eget sodales arcu luctus.Curabitur enim lectus, vulputate non erat sed, cursus vestibulum ante. Vestibulum nec convallis  neque, quis pretium eros. "
    },
    {
      title: "Prueba de titulo",
      date: "publicado " + new Date(),
      content: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ac lectus accumsan, suscipit justo sit amet, pellentesque ex. Duis id justo tortor. Nam bibendum malesuada fames ac turpis egestas. Nunc cursus dui nec ex volutpat, eget sodales arcu luctus.Curabitur enim lectus, vulputate non erat sed, cursus vestibulum ante. Vestibulum nec convallis  neque, quis pretium eros. "
    },
    {
      title: "Prueba de titulo",
      date: "publicado " + new Date(),
      content: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ac lectus accumsan, suscipit justo sit amet, pellentesque ex. Duis id justo tortor. Nam bibendum malesuada fames ac turpis egestas. Nunc cursus dui nec ex volutpat, eget sodales arcu luctus.Curabitur enim lectus, vulputate non erat sed, cursus vestibulum ante. Vestibulum nec convallis  neque, quis pretium eros. "
    }
  ]

  post.forEach((item, index) => {
    var posts = ` <article id="parrafo">
      <h2> ${item.title}</h2>
      <span id="fecha">${item.date}</span>
        <p> 
       ${item.content}
      </p>
      <a href="#" class="buttom">Leer mas</a>

        </article>`;
    $('#parrafo').append(posts)


  });
  //selector de tema
  
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

  /*$("body").on( "click", '.link', function( event ) {
    event.preventDefault();
    localStorage.clear();
    window.location.reload();
  });*/






})
