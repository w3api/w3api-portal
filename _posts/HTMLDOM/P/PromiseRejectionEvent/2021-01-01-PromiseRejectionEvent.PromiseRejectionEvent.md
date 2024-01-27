---
title: PromiseRejectionEvent.PromiseRejectionEvent()
permalink: /HTMLDOM/PromiseRejectionEvent/PromiseRejectionEvent/
excerpt: "El constructor PromiseRejectionEvent se utiliza para crear un evento que se dispara cuando una promesa es rechazada."
date: 2024-01-26
last_modified_at: 2024-01-27
key: HTMLDOM.P.PromiseRejectionEvent.PromiseRejectionEvent
category: HTMLDOM
tags: [constructor htmldom]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


El constructor `PromiseRejectionEvent` se utiliza para crear un nuevo objeto [`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/). Este objeto representa un evento que se dispara cuando una promesa es rechazada.


## Sintaxis


La sintaxis para la creación de un nuevo [`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/) en [Javascript](https://manualweb.net/javascript/) es la siguiente:


```javascript
new PromiseRejectionEvent(type, options)

```


## Parámetros


Estos son los parámetros que se deben pasar al constructor de `PromiseRejectionEvent`:

- **type:** Este es el primer parámetro y se refiere al tipo del evento de rechazo de la promesa.
- **options:** Este es el segundo parámetro, y se utiliza para especificar las opciones adicionales que pueden configurarse para el evento.

## Objeto Padre


[`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/)


## Ejemplo


```javascript
let event = new PromiseRejectionEvent('rejection', {
  promise: Promise.reject(new Error('Promise Failed!')),
  reason: 'Error: Promise Failed!'
});
window.dispatchEvent(event);
```


## Artículos

- 
