---
title: HTMLDialogElement.returnValue
permalink: /HTMLDOM/HTMLDialogElement/returnValue/
date: 2023-10-22
key: HTMLDOM.H.HTMLDialogElement.returnValue
category: HTMLDOM
tags: [propiedad htmldom]
sidebar:
  nav: htmldom
---

## Descripción


El atributo `returnValue` contiene el valor devuelto por una ventana modal definida por el elemento [`dialog`](https://w3api.com/HTML/dialog/). Dicho valor tiene el nombre del botón que se pulso dentro de la ventana para cerrarla.


## Sintaxis


```javascript
HTMLDialogElement.returnValue
```


## Objeto Padre


[`HTMLDialogElement`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/)


## Ejemplo


```javascript
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario en Ventana de Dialogo con HTML5</title>
</head>
<body>

<h1>Formulario en Ventana de Dialogo con HTML5</h1>
 
<dialog id="buscador">
  <form action="https://lineadecodigo.com/search" method="dialog">
    <label for="busqueda">¿Qué quieres buscar?</label>
    <input type="search" id="busqueda" name="q"/>
    <input type="submit" value="Buscar"/>
    <input id="cancelar" type="submit" value="Cancelar"/>
  </form>
</dialog>

<menu>
  <button id="mostrarBuscador">Mostrar Buscador</button>
</menu>

<script>
(function() {
  var mostrarBuscador = document.getElementById('mostrarBuscador');
  var cancelButton = document.getElementById('cancelar');
  var dialogo = document.getElementById('buscador');
  var busqueda = document.getElementById('busqueda');

  // Mostramos el buscador
  mostrarBuscador.addEventListener('click', function() {
    dialogo.showModal();
  });

  // Controlamos los botones del buscador
  dialogo.addEventListener('close', function(){

  if (dialogo.returnValue == "Buscar")       
	  console.log('Quieres buscar ' + busqueda.value);
  else
	  console.log('Parece que no quieres buscar nada');
  })
})();
</script>
    
</body>
</html>
```


## Artículos

- [Formulario en ventana dialogo con HTML5](https://lineadecodigo.com/html5/formulario-en-ventana-dialogo-con-html5/)
