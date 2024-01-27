---
title: PromiseRejectionEvent.unhandledrejection
permalink: /HTMLDOM/PromiseRejectionEvent/unhandledrejection/
excerpt: "El evento unhandledrejection del interface PromiseRejectionEvent se dispara cuando una promesa es rechazada sin un manejador adjunto."
date: 2024-01-26
last_modified_at: 2024-01-27
key: HTMLDOM.P.PromiseRejectionEvent.unhandledrejection
category: HTMLDOM
tags: [evento htmldom]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


El evento `unhandleredjection` del interface [`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/) se dispara cuando una promesa es rechazada y no hay ningún manejador de rechazo adjunto a la promesa. Este evento se utiliza principalmente para la depuración y el desarrollo, ya que permite a los desarrolladores manejar errores que no fueron capturados durante el ciclo de vida normal de una promesa.


## Sintaxis


```javascript
PromiseRejectionEvent.unhandledrejection
```


## Objeto Padre


[`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/)


## Ejemplo


```javascript
window.addEventListener("unhandledrejection", function(event) {
    console.log("Promesa rechazada sin manejar: ", event.promise);
    console.log("Razón del rechazo: ", event.reason);
});
```


## Artículos

- 
