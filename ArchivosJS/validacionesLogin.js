function execute() {

        if (document.getElementById("nomUsuario").value == "" || document.getElementById("conUsuario").value == "") {
            alert("Debe ingresar un nombre de usuario y contraseña");

        } //fin del if
        else {
            //realizar conexion
            var url = "ArchivosPhp/Login.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $("#fr").serialize(),
                success: function(data) {

                    var json = $.parseJSON(data);
                    $("#info").val(json.dato1);
                }
            });

        }

    } //fin de la funcion