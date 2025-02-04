---
title: WebSocket.message
permalink: /WebAPI/WebSocket/message/
excerpt: "El evento message de WebSocket permite manejar mensajes recibidos del servidor."
date: 2025-02-04
last_modified_at: 2025-02-04
key: WebAPI.W.WebSocket.message
category: WebAPI
tags: [evento webapi]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


El evento `message` del objeto [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) se lanza cuando el cliente recibe un mensaje del servidor a través de la conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/). Este evento nos permite manejar los datos recibidos y procesarlos según las necesidades de nuestra aplicación.


## Sintaxis


```javascript
WebSocket.message
```


## Objeto Padre


[`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/)


## Ejemplo


En el siguiente ejemplo vemos cómo podemos manejar los mensajes recibidos a través de una conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) mediante el evento `message`. En este caso, simplemente mostramos el contenido del mensaje en la consola.


```javascript
// Crear una conexión WebSocket
const ws = new WebSocket('ws://localhost:8080');

// Manejar los mensajes recibidos
ws.addEventListener('message', (event) => {
    console.log('Mensaje recibido:', event.data);
});
```


## Artículos

- [Websocket Echo en Java EE](https://lineadecodigo.com/java/websocket-echo-en-java-ee/)
