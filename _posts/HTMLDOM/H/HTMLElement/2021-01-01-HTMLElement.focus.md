---
title: HTMLElement.focus()
permalink: /HTMLDOM/HTMLElement/focus/
date: 2023-10-22
key: HTMLDOM.H.HTMLElement.focus
category: HTMLDOM
tags: [metodo htmldom]
sidebar:
  nav: htmldom
---

## **Descripción**


El método `focus()` nos permite establecer el foco sobre un determinado elemento del árbol [HTML DOM](https://www.manualweb.net/dom/).


Cuando se realiza una invocación al método `focus()` el navegador se ubica en dicho elemento y establece una marca visible alrededor del elemento.


## **Sintaxis**


```javascript
Element.focus()
Element.focus(options)
```


## Parámetros

- **options**, de forma _opcional_ se le puede pasar un objeto al método `.focus()` que contenga información sobre el proceso de obtención del foco del elemento. Es por ello que este objeto tiene dos propiedades:
	- **preventScroll**, que nos permitirá prevenir el efecto de scroll hacía el método si le damos un valor de `true`. O bien asignarle un valor de `false` (valor por defecto) para que cuando hagamos foco se produzca un scroll hasta el elemento.
	- **focusVisible**, para gestionar la marca visible sobre el elemento. En el caso de indicar un valor de `true` el navegador mostrará una marca visible sobre el elemento que hemos hecho foco y en el caso de dar un valor de `false` no lo asignará dicha marca.

> El navegador podrá poner una marca de visibilidad independientemente de valor de `focusVisible` si lo considera indispensable por criterios de accesibilidad.


## **Objeto Padre**


[`HTMLElement`](https://www.w3api.com/HTMLDOM/HTMLElement/)


## **Ejemplo**


```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacer foco en un elemento de la página</title>
    
    <script type="text/javascript">
        function foco(idElemento){
         document.getElementById(idElemento).focus();
        }
    </script>

</head>
<body>

<h1>Hacer foco en un elemento de la página</h1>


<form method="post" action="#">
    <label for="nombre">Nombre:</label> <input type="text" id="nombre">    
    <label for="apellido">Apellido:</label>Apellido2: <input type="text" id="apellido">
    <label for="direccion">Dirección:</label>Direccion: <input type="text" id="direccion">
</form>

<br/>

<a href="#" id="enlace">Enlace que no enlaza con nada</a>

<br/><br/>

<form action="">
    <input type="button" value="Foco sobre el nombre del formulario" onClick="foco('nombre');">
    <input type="button" value="Foco sobre el apellido formulario" onClick="foco('apellido');">
    <input type="button" value="Foco sobre el enlace" onClick="foco('enlace');">
</form>
    
</body>
</html>
```


## **Artículos**

- [Hacer foco en un campo de la página usando Javascript](https://lineadecodigo.com/javascript/hacer-foco-en-un-campo-de-la-pagina-usando-javascript/)
- [Hacer foco en un elemento sin scroll](https://lineadecodigo.com/dom/hacer-foco-en-un-elemento-sin-scroll/)
