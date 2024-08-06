$(function(){

    $('#btnMostrar').on('click', function(){
        //recura los datos ingresado por el usuario en los campos de texto con los id
        const nombre = $('#txtNombre').val();
        const apellido = $('#txtApellido').val();
        const cedula = $('#txtCedula').val();
        const direccion =$('#txtDireccion').val();

        //  esto hace verifica si los campos estan vacios y pone los bordes rojos y 
        //si no los pone de color verde 
        if (!nombre.trim()) {
            $('#txtNombre').css('border-color', 'red');
        } else {
            $('#txtNombre').css('border-color', 'green');
        }

        if (!apellido.trim()) {
            $('#txtApellido').css('border-color', 'red');
        } else {
            $('#txtApellido').css('border-color', 'green');
        }

        if (!cedula.trim()) {
            $('#txtCedula').css('border-color', 'red');
        } else {
            $('#txtCedula').css('border-color', 'green');
        }

        if (!direccion.trim()) {
            $('#txtDireccion').css('border-color', 'red');
        } else {
            $('#txtDireccion').css('border-color', 'green');
        }

        console.log(' nombres '+nombre+' apellidos '+apellido+' cedulas '+cedula+' direccion '+direccion);
        alert(' nombres '+nombre+' apellidos '+apellido+' cedulas '+cedula+' direccion '+direccion);


    });

    $('#btnLimpiar').on('click', function(){
        alert('Se limpiaran el formulario');
        // botón para limpiar los campos del formulario
        $('#txtNombre').val('');
        $('#txtApellido').val('');
        $('#txtCedula').val('');
        $('#txtDireccion').val('');

        // este pedacito hace que se quite los colores de los bordes de los campos 
        $('#txtNombre').css('border-color', '');
        $('#txtApellido').css('border-color', '');
        $('#txtCedula').css('border-color', '');
        $('#txtDireccion').css('border-color', '');
    });
});
