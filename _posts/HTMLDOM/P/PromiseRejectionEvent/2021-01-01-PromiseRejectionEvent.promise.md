---
title: PromiseRejectionEvent.promise
permalink: /HTMLDOM/PromiseRejectionEvent/promise/
excerpt: "La propiedad promise del evento PromiseRejectionEvent devuelve la promesa rechazada."
date: 2024-01-26
last_modified_at: 2024-01-27
key: HTMLDOM.P.PromiseRejectionEvent.promise
category: HTMLDOM
tags: [propiedad htmldom]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


La propiedad promise del interface [`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/) devuelve la promesa que ha sido rechazada. Esta propiedad es de solo lectura y se establece cuando se crea el evento.


## Sintaxis


```javascript
PromiseRejectionEvent.promise
```


## Objeto Padre


[`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/)


## Ejemplo


```javascript
let promise = Promise.reject("Error");
window.onunhandledrejection = function(event) {
  console.log(event.promise === promise); // true
};
```


## Artículos

- 
