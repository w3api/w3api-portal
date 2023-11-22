---
title: HTMLDialogElement
permalink: /HTMLDOM/HTMLDialogElement/
date: 2023-10-22
key: HTMLDOM.H.HTMLDialogElement
category: HTMLDOM
tags: [interface htmldom]
sidebar:
  nav: htmldom
---

## Descripción


El interface HTMLDialogElement nos ofrece los métodos y propiedades para poder manipular un elemento [`dialog`](https://www.w3api.com/HTML/dialog/). Principalmente las operaciones que haremos con este elemento son las de o bien mostrarlo o bien cerrarlo.


## Sintaxis


```javascript
HTMLDialogElement
```


## Constructores

- N/A

## Propiedades

- [open](https://www.w3api.com/HTMLDOM/HTMLDialogElement/open/)
- [returnValue](https://www.w3api.com/HTMLDOM/HTMLDialogElement/returnValue/)

## Métodos

- [close()](https://www.w3api.com/HTMLDOM/HTMLDialogElement/close/)
- [show()](https://www.w3api.com/HTMLDOM/HTMLDialogElement/show/)
- [showModal()](https://www.w3api.com/HTMLDOM/HTMLDialogElement/showModal/)

## Eventos

- [cancel](https://www.w3api.com/HTMLDOM/HTMLDialogElement/cancel/)
- [close](https://www.w3api.com/HTMLDOM/HTMLDialogElement/close/)

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
