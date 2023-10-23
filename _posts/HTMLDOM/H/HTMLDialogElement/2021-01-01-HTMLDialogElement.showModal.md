---
title: HTMLDialogElement.showModal()
permalink: /HTMLDOM/HTMLDialogElement/showModal/
date: 2023-10-22
key: HTMLDOM.H.HTMLDialogElement.showModal
category: HTMLDOM
tags: [metodo htmldom]
sidebar:
  nav: htmldom
---

## Descripción


El método `showModal()` permite mostrar el elemento [`dialog`](https://w3api.com/HTML/dialog/) como si fuese una ventana modal. Esta ventana modal se superpone a todo el contenido que haya en la página web, el cual queda bloqueado y sobre el que no podremos interactuar mientras tengamos la ventana modal.


## Sintaxis


```javascript
showModal()
```


## Parámetros

- N/A

## Objeto Padre


[`HTMLDialogElement`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/)


## Ejemplo


```html
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
