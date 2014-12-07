<!DOCTYPE HTML>
<html>
    
    <head>
        <title>The Health Book</title>
        <meta charset="utf-8" />
            <script src="ArchivosJS/jquery-1.11.1.min.js"></script>
        <link rel="stylesheet" type="text/css" href="ArchivosCss/general.css">
        <link rel="stylesheet" type="text/css" href="ArchivosCss/login.css">
            <?php

$msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["nomUsuario"])) {
        
        $msg = "Ningun campo puede ir vacio";
    } //fin del if de validar nombre    
    if (empty($_POST["conUsuario"])) {
        
        $msg = "Ningun campo puede ir vacio";
    } //fin del if de validar password
    if ($msg != "") {
        echo '<script type="text/javascript">alert("' . $msg . '")</script>';
    } //fin del if de imprimir mensaje de error
    else {
        $conn = mysqli_connect('localhost', 'citasmedicasuser', 'progra4', 'health_book');
        
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        } //fin del if
        
        $nombreUsuario = $_POST['nomUsuario'];
        $passUsuario   = $_POST['conUsuario'];
        //echo $nombreUsuario.$passUsuario;
        
        if ($nombreUsuario == "admin" && $passUsuario) {
		session_start();
            $_SESSION["usuario"] = "admin";
            $_SESSION["pass"]    = "admin";
            echo '<script type="text/javascript">window.location.replace("./InicioAdministrador.html");</script>';
        } //fin del if
        else {
            
            $query = "SELECT* FROM usuarios WHERE UserNames='$nombreUsuario' and UserPassword='$passUsuario'";
            echo "entro al else";
            $result = mysqli_query($conn, $query);
            
            
            
            
            if ($result->num_rows > 0) {
                //inicializando las variables de sesion
		session_start();
                $_SESSION["usuario"] = $nombreUsuario;
                $_SESSION["pass"]    = $passUsuario;
                
                echo '<script type="text/javascript">window.location.replace("./InicioCliente.html");</script>';
                
                
            } else {
                echo '<script type="text/javascript">alert("Nombre de usuario y/o contraseña equivocada"); </script>';
            } //fin del else
        } //fin else grande
        
    } //fin del else para enviar a la base de datos
} //fin del if grande
?>
       
    </head>

    

    <body id="back">
        <br/ >
        <h1>The Health Book</h1>
        <br />
        <section id="login_section">
            <br></br>
            <div>
                <form id="fr" method="POST"
 action="<?php
echo htmlspecialchars($_SERVER["PHP_SELF"]);
?>">
                    <label>Nombre de usuario</label>
                    <input type="text" tabindex="1" id="nomUsuario" name="nomUsuario">
                    <br></br>
                    <label>Contraseña<label>
                    <input type="password" tabindex="2" id="conUsuario" name="conUsuario">
                    <input type="submit" value="Login">
                </form>
            </div>
        </section>
        <a href="RegistrarCliente.html"><B>Registrarse</B></a>
    </body>




</html>