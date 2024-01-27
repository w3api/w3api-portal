---
title: PromiseRejectionEvent.rejectionhandled
permalink: /HTMLDOM/PromiseRejectionEvent/rejectionhandled/
excerpt: "El evento rejectionhandled se dispara cuando una promesa rechazada es manejada en JavaScript."
date: 2024-01-26
last_modified_at: 2024-01-27
key: HTMLDOM.P.PromiseRejectionEvent.rejectionhandled
category: HTMLDOM
tags: [evento htmldom]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


El evento rejectionhandled del interface [`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/) se dispara cuando una promesa previamente rechazada ha sido manejada por un controlador de rechazo. Este evento es útil para la depuración y el manejo de errores en las promesas.


## Sintaxis


```javascript
PromiseRejectionEvent.rejectionhandled
```


## Objeto Padre


[`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/)


## Ejemplo


```javascript
window.onrejectionhandled = function(event) {
  console.log('Una promesa previamente rechazada ha sido manejada:', event.promise);
  console.log('Motivo del rechazo:', event.reason);
};
```


## Artículos

- 
