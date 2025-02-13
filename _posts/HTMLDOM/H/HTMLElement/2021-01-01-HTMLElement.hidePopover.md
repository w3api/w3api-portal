---
title: HTMLElement.hidePopover()
permalink: /HTMLDOM/HTMLElement/hidePopover/
excerpt: "El método hidePopover permite ocultar popovers visibles en elementos HTML."
date: 2025-02-13
last_modified_at: 2025-02-13
key: HTMLDOM.H.HTMLElement.hidePopover
category: HTMLDOM
tags: [metodo htmldom,dom living standard]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


El método `hidePopover()` del elemento [`HTMLElement`](https://www.w3api.com/HTMLDOM/HTMLElement/) es un método que nos permite ocultar un popover que esté visible en ese momento. Los popovers son elementos emergentes que se muestran sobre el contenido principal y pueden ser ocultados mediante este método de forma programática.


Si el popover ya está oculto, llamar a este método no tendrá ningún efecto.


## Sintaxis


```javascript
HTMLElement.hidePopover()
```


## Parámetros

- N/A

## Objeto Padre


[`HTMLElement`](https://www.w3api.com/HTMLDOM/HTMLElement/)


## Ejemplo


Veamos un ejemplo de cómo ocultar un popover utilizando el método `hidePopover()`:


```javascript
// Obtener una referencia al elemento popover
const miPopover = document.getElementById('miPopover');

// Ocultar el popover
miPopover.hidePopover();
```


## Artículos

- 
