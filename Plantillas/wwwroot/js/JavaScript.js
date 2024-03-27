//$(document).ready(function () {
//    $("body").css("background-color", "#86895d");
//    $("#pelicano").on({
//        click: function () {
//            $("header").css("background-color", "pink");
//        },
//        mouseenter: function () {
//            $("footer").css("background-color", "cyan");
//        },
//        mouseleave: function () {
//            $("footer").css("background-color", "#a56d5d");
//        }

//    });
//    $("#bOcultar").click(function () {
//        $("#pelicano").hide();
//    });
//    $("#bMostrar").click(function () {
//        $("#pelicano").show();
//    })
//});

$(document).ready(function () {
    let valorTexto = "";
    $("input").click(function () {
        
        let botonpres = $(this).val();

        if (botonpres != "=" && botonpres != "+" && botonpres && "-") {
            valorTexto += botonpres;
            $("#texto").val(valorTexto);
        } else if (botonpres = "+") {
            let operacion = "sumar";
            let primera = parseInt(valorTexto);
            console.log(primera);
            valorTexto = "";
            console.log(valorTexto);
        } else if (botonpres = "-") {
            let operacion = "restar";
            let primera = parseInt(valorTexto);
            valorTexto = "";
        } else if (botonpres = "=") {
            if (operacion == "sumar") {
                $("#texto").val(primera + valorTexto);
            } else if (operacion == "restar") {
                $("#texto").val(primera - valorTexto);
            }
        }
        
    })
});

