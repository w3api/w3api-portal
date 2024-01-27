---
title: PromiseRejectionEvent
permalink: /HTMLDOM/PromiseRejectionEvent/
excerpt: "El PromiseRejectionEvent es una interface del modelo HTMLDOM que representa un evento cuando una promesa es rechazada. Se utiliza para gestionar errores en operaciones asíncronas."
date: 2024-01-26
last_modified_at: 2024-01-27
key: HTMLDOM.P.PromiseRejectionEvent
category: HTMLDOM
tags: [interface htmldom]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


El `PromiseRejectionEvent` es una interface del modelo HTMLDOM y que representa a un evento que se dispara cuando una promesa es rechazada y no hay rutina para manejar el rechazo. Se utiliza principalmente para la gestión de errores y la depuración en operaciones asíncronas.


## Sintaxis


```javascript
PromiseRejectionEvent
```


## Constructores

- [PromiseRejectionEvent()](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/PromiseRejectionEvent/)

## Propiedades

- [promise](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/promise/)
- [reason](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/reason/)

## Métodos


## Eventos

- [rejectionhandled](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/rejectionhandled/)
- [unhandledrejection](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/unhandledrejection/)

## Ejemplo


```javascript
window.addEventListener("unhandledrejection", function(event) {
  console.log(event.promise); // La promesa que fue rechazada
  console.log(event.reason); // La razón del rechazo
});
```


## Artículos

- 
