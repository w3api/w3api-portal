---
title: HTMLElement
permalink: /HTMLDOM/HTMLElement/
excerpt: "El HTMLElement es una interfaz que representa elementos HTML manipulables en JavaScript."
date: 2023-01-31
last_modified_at: 2025-02-18
key: HTMLDOM.H.HTMLElement
category: HTMLDOM
tags: [interface htmldom,dom level 1]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


`HTMLElement` es el interface genérico que representa cualquier elemento de tipo [HTML](https://manualweb.net/html/). Hereda algunas propiedades del interface [DOM](https://www.manualweb.net/dom/) genérico [`Element`](http://www.w3api.com/DOM/Element).


Los elementos [HTML](https://manualweb.net/html/) representados mediante este interface son aquellos que se pueden manipular mediante [JavaScript](https://www.manualweb.net/javascript/), permitiendo acceder y modificar sus propiedades, métodos y gestionar los eventos asociados. Esto facilita la creación de páginas web dinámicas e interactivas.


## Sintaxis


```javascript
HTMLElement
```


## Propiedades

- [accessKey](https://www.w3api.com/HTMLDOM/HTMLElement/accessKey/)
- [accessKeyLabel](https://www.w3api.com/HTMLDOM/HTMLElement/accessKeyLabel/)
- [anchorElement](https://www.w3api.com/HTMLDOM/HTMLElement/anchorElement/)
- [attributeStyleMap](https://www.w3api.com/HTMLDOM/HTMLElement/attributeStyleMap/)
- [autocapitalize](https://www.w3api.com/HTMLDOM/HTMLElement/autocapitalize/)
- [autofocus](https://www.w3api.com/HTMLDOM/HTMLElement/autofocus/)
- [autocorrect](https://www.w3api.com/HTMLDOM/HTMLElement/autocorrect/)
- [contentEditable](https://www.w3api.com/HTMLDOM/HTMLElement/contentEditable/)
- [dataset](https://www.w3api.com/HTMLDOM/HTMLElement/dataset/)
- [dir](https://www.w3api.com/HTMLDOM/HTMLElement/dir/)
- [draggable](https://www.w3api.com/HTMLDOM/HTMLElement/draggable/)
- [editContext](https://www.w3api.com/HTMLDOM/HTMLElement/editContext/)
- [enterKeyHint](https://www.w3api.com/HTMLDOM/HTMLElement/enterKeyHint/)
- [hidden](https://www.w3api.com/HTMLDOM/HTMLElement/hidden/)
- [inert](https://www.w3api.com/HTMLDOM/HTMLElement/inert/)
- [innerText](https://www.w3api.com/HTMLDOM/HTMLElement/innerText/)
- [inputMode](https://www.w3api.com/HTMLDOM/HTMLElement/inputMode/)
- [isContentEditable](https://www.w3api.com/HTMLDOM/HTMLElement/isContentEditable/)
- [lang](https://www.w3api.com/HTMLDOM/HTMLElement/lang/)
- [nonce](https://www.w3api.com/HTMLDOM/HTMLElement/nonce/)
- [offsetHeight](https://www.w3api.com/HTMLDOM/HTMLElement/offsetHeight/)
- [offsetLeft](https://www.w3api.com/HTMLDOM/HTMLElement/offsetLeft/)
- [offsetParent](https://www.w3api.com/HTMLDOM/HTMLElement/offsetParent/)
- [offsetTop](https://www.w3api.com/HTMLDOM/HTMLElement/offsetTop/)
- [offsetWidth](https://www.w3api.com/HTMLDOM/HTMLElement/offsetWidth/)
- [outerText](https://www.w3api.com/HTMLDOM/HTMLElement/outerText/)
- [popover](https://www.w3api.com/HTMLDOM/HTMLElement/popover/)
- [spellcheck](https://www.w3api.com/HTMLDOM/HTMLElement/spellcheck/)
- [style](https://www.w3api.com/HTMLDOM/HTMLElement/style/)
- [tabIndex](https://www.w3api.com/HTMLDOM/HTMLElement/tabIndex/)
- [title](https://www.w3api.com/HTMLDOM/HTMLElement/title/)
- [translate](https://www.w3api.com/HTMLDOM/HTMLElement/translate/)
- [virtualKeyboardPolicy](https://www.w3api.com/HTMLDOM/HTMLElement/virtualKeyboardPolicy/)
- [writingSuggestions](https://www.w3api.com/HTMLDOM/HTMLElement/writingSuggestions/)

## Métodos

- [attachInternals()](https://www.w3api.com/HTMLDOM/HTMLElement/attachInternals/)
- [blur()](https://www.w3api.com/HTMLDOM/HTMLElement/blur/)
- [click()](https://www.w3api.com/HTMLDOM/HTMLElement/click/)
- [focus()](https://www.w3api.com/HTMLDOM/HTMLElement/focus/)
- [hidePopover()](https://www.w3api.com/HTMLDOM/HTMLElement/hidePopover/)
- [showPopover()](https://www.w3api.com/HTMLDOM/HTMLElement/showPopover/)
- [togglePopover()](https://www.w3api.com/HTMLDOM/HTMLElement/togglePopover/)

## Eventos

- [cancel](https://www.w3api.com/HTMLDOM/HTMLElement/cancel/)
- [change](https://www.w3api.com/HTMLDOM/HTMLElement/change/)
- [error](https://www.w3api.com/HTMLDOM/HTMLElement/error/)
- [load](https://www.w3api.com/HTMLDOM/HTMLElement/load/)
- [copy](https://www.w3api.com/HTMLDOM/HTMLElement/copy/)
- [cut](https://www.w3api.com/HTMLDOM/HTMLElement/cut/)
- [paste](https://www.w3api.com/HTMLDOM/HTMLElement/paste/)
- [drag](https://www.w3api.com/HTMLDOM/HTMLElement/drag/)
- [dragend](https://www.w3api.com/HTMLDOM/HTMLElement/dragend/)
- [dragenter](https://www.w3api.com/HTMLDOM/HTMLElement/dragenter/)
- [dragleave](https://www.w3api.com/HTMLDOM/HTMLElement/dragleave/)
- [dragover](https://www.w3api.com/HTMLDOM/HTMLElement/dragover/)
- [dragstart](https://www.w3api.com/HTMLDOM/HTMLElement/dragstart/)
- [drop](https://www.w3api.com/HTMLDOM/HTMLElement/drop/)
- [beforetoggle](https://www.w3api.com/HTMLDOM/HTMLElement/beforetoggle/)
- [toggle](https://www.w3api.com/HTMLDOM/HTMLElement/toggle/)

## Ejemplo


```javascript
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
- [Popover con cierre explicito en HTML5](https://lineadecodigo.com/html5/popover-con-cierre-explicito-en-html5/)
