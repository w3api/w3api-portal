---
title: HTMLElement.showPopover()
permalink: /HTMLDOM/HTMLElement/showPopover/
excerpt: "El método showPopover de HTMLElement permite mostrar elementos HTML como ventanas emergentes."
date: 2025-02-13
last_modified_at: 2025-02-13
key: HTMLDOM.H.HTMLElement.showPopover
category: HTMLDOM
tags: [metodo htmldom,dom living standard]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


El método `showPopover()` del elemento [`HTMLElement`](https://www.w3api.com/HTMLDOM/HTMLElement/) es un método que nos permite mostrar un elemento [HTML](https://www.manualweb.net/html/) como un pop-up o ventana emergente en la interfaz de usuario. Este elemento se mostrará por encima del contenido normal de la página y permanecerá visible hasta que el usuario lo cierre explícitamente o se invoque el método `hidePopover()`.


## Sintaxis


```javascript
HTMLElement.showPopover()
```


## Parámetros

- N/A

## Objeto Padre


[`HTMLElement`](https://www.w3api.com/HTMLDOM/HTMLElement/)


## Ejemplo


A continuación, podemos ver un ejemplo del uso del método `showPopover()` aplicado sobre un elemento [HTML](https://www.manualweb.net/html/):


```javascript
// Obtenemos el elemento que queremos mostrar como pop-up
const popover = document.getElementById('mi-popover');

// Mostramos el elemento como pop-up
popover.showPopover();
```


## Artículos

- 
