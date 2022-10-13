//AÑADE LA CLASE "Active" A LA OPCION SELECCIONADA DEL MENU LATERAL DEL INDEX.HTML
    
    const list = document.querySelectorAll("li.MenuOpcionLateral");
    function activarClase(){
        list.forEach(
            function(item){
                item.classList.remove("Active")
            }
        );
        this.classList.add("Active");
    }

    list.forEach(
        function(item){
            item.addEventListener("click", activarClase);
        }
    );

/*______________________________________________________________________________*/

//AÑADE LA CLASE "SeccionActiva" AL MENU SUPERIOR DEL HOME.HTML

    const list1 = document.querySelectorAll(".MenuSuperiorHome ul li");
    function activarSeccion(){
        //Si bien no se considera al primer elemnto en la escucha de eventos, se verifica que no tenga la clase SeccionActiva
        if (list1[0].className === "SeccionActiva"){
            list1[0].classList.remove("SeccionActiva");
            return;
        }
        list1.forEach(
            function(item){
                item.classList.remove("SeccionActiva")
            }
        );
        this.classList.add("SeccionActiva");
    }
    
    for (let i = 1; i < list1.length; i++){
        list1[i].addEventListener("click", activarSeccion);
    };

/*______________________________________________________________________________*/


