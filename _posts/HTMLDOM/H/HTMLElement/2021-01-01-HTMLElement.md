---
title: HTMLElement
permalink: /HTMLDOM/HTMLElement/
date: 2023-01-31
key: HTMLDOM.H.HTMLElement
category: HTMLDOM
tags: [interface htmldom]
sidebar:
  nav: htmldom
---

## **Descripción**


`HTMLElement` es el interface genérico que representa cualquier elemento de tipo [HTML](https://manualweb.net/html/). Hereda algunas propiedades del interface [DOM](https://www.manualweb.net/dom/) genérico [`Element`](http://www.w3api.com/DOM/Element).


## **Sintaxis**


```javascript
Element
```


## **Constructores**

- a

## Propiedades

- 

## **Métodos**

- attachInternals()
- blur()
- click()
- [focus()](http://www.w3api.com/HTMLDOM/HTMLElement/focus/)

## Eventos

- 

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


## Artículos

- [Hacer foco en un campo de la página usando Javascript](https://lineadecodigo.com/javascript/hacer-foco-en-un-campo-de-la-pagina-usando-javascript/)
