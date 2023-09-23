---
title: MessageEvent
permalink: /HTMLDOM/MessageEvent/
date: 2023-01-31
key: HTMLDOM.M.MessageEvent
category: HTMLDOM
tags: [interface htmldom]
sidebar:
  nav: htmldom
---

## **Descripción**


`MessageEvent` es un interface que representa el mensaje recibido dentro de la ventana de un navegador.


**Sintaxis**


```javascript
MessageEvent
```


## **Constructores**

- MessageEvent

## Propiedades

- [data](http://www.w3api.com/HTMLDOM/MessageEvent/data/)
- origin
- lastEventId
- source
- ports

## **Métodos**


## Eventos


## **Ejemplo**


```html
<button id="boton">Enviar Mensaje</button>

<script>
  boton = document.getElementById("boton");
  boton.addEventListener("click",function(){
    window.postMessage("Mensaje para la ventana","*");
  })
</script>
```


## Artículos

- 
