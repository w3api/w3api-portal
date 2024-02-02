---
title: PromiseRejectionEvent.reason
permalink: /HTMLDOM/PromiseRejectionEvent/reason/
excerpt: "La propiedad reason del evento PromiseRejectionEvent devuelve el motivo del rechazo de una promesa en JavaScript."
date: 2024-01-26
last_modified_at: 2024-02-02
key: HTMLDOM.P.PromiseRejectionEvent.reason
category: HTMLDOM
tags: [propiedad htmldom]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


La propiedad reason del interface [`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/) devuelve un valor que representa el motivo del rechazo de la promesa. Este valor es pasado al manejador de eventos como un argumento cuando se dispara un evento de rechazo de promesa. Este valor puede ser cualquier objeto [Javascript](https://manualweb.net/javascript/), incluyendo un objeto de error.


## Sintaxis


```javascript
PromiseRejectionEvent.reason
```


## Objeto Padre


[`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/)


## Ejemplo


```javascript
let promise = Promise.reject(new Error('Motivo del rechazo'));
promise.catch((error) => {
  let evento = new PromiseRejectionEvent('rejectionhandled', {
    promise: promise,
    reason: error,
  });
  console.log(evento.reason);
});
```


## Artículos

- [Gestionar Promesas Rechazadas](http://lineadecodigo.com/html5/gestionar-promesas-rechazadas/)
