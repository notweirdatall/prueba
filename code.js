function validateForm() {

  var formulario = document.getElementById('forma');
  var Nombre = document.forms['retiro']['Nombre'].value;
  var Apellido = document.forms['retiro']['Apellido'].value;
  var Cedula = document.forms['retiro']['Cedula'].value;
  var Carrera = document.forms['retiro']['Carrera'].value;
  var Semestre = document.forms['retiro']['Semestre'].value;
  var NombreAsignatura = document.forms['retiro']['NombreAsignatura'].value;
  var Codigo = document.forms['retiro']['Codigo'].value;
  var UC = document.forms['retiro']['UC'].value;
  var Motivo = document.forms['retiro']['Motivo'].value;

  if (Nombre == '') {
    alert('Campo \'Nombre\' debe ser llenado');
    return false;
  }
  if (Apellido == '') {
    alert('Campo \'Apellido\' debe ser llenado');
    return false;
  }
  if (isNaN(Cedula) || Cedula < 1) {
    alert('Campo \'Cedula\' debe ser llenado correctamente');
    return false;
  }
  if (Carrera == '') {
    alert('Campo \'Carrera\' debe ser llenado');
    return false;
  }
  if (isNaN(Semestre) || Semestre < 1) {
    alert('Campo \'Semestre\' debe ser llenado correctamente');
    return false;
  }
  if (NombreAsignatura == '') {
    alert('Campo \'NombreAsignatura\' debe ser llenado');
    return false;
  }
  if (Codigo == '') {
    alert('Campo \'Codigo\' debe ser llenado');
    return false;
  }
  if (isNaN(UC) || UC < 1) {
    alert('Campo \'UC\' debe ser llenado correctamente');
    return false;
  }
  if (Motivo == '') {
    alert('Campo \'Motivo\' debe ser llenado');
    return false;
  }  

}
function Retirar() {
  var formulario = document.getElementById('forma');
  var titulo = document.getElementById('titulo');
  formulario.style.display = 'block';
  titulo.style.display = 'none';
}
