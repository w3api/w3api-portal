---
title: WebSocket
permalink: /WebAPI/WebSocket/
excerpt: "WebSocket permite comunicación bidireccional entre navegador y servidor en tiempo real."
date: 2025-02-04
last_modified_at: 2025-02-04
key: WebAPI.W.WebSocket
category: WebAPI
tags: [interface webapi]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


El inteface `Websocket` en [Javascript](https://www.manualweb.net/javascript/) es un elemento del [WebAPI](https://w3api.com/WebAPI/) que permite establecer una comunicación bidireccional y persistente entre un navegador y un servidor. Esta tecnología es fundamental para aplicaciones que requieren actualizaciones en tiempo real, como chats, juegos online o dashboards de datos en vivo. A diferencia del modelo tradicional de petición-respuesta HTTP, `WebSocket` mantiene una conexión abierta que permite el intercambio continuo de datos.


## Sintaxis


```javascript
new WebSocket(url)
new WebSocket(url, protocols)
```


## Constructores

- [WebSocket()](https://www.w3api.com/WebAPI/WebSocket/WebSocket/)

## Propiedades

- [binaryType](https://www.w3api.com/WebAPI/WebSocket/binaryType/)
- [bufferedAmount](https://www.w3api.com/WebAPI/WebSocket/bufferedAmount/)
- [extensions](https://www.w3api.com/WebAPI/WebSocket/extensions/)
- [protocol](https://www.w3api.com/WebAPI/WebSocket/protocol/)
- [readyState](https://www.w3api.com/WebAPI/WebSocket/readyState/)
- [url](https://www.w3api.com/WebAPI/WebSocket/url/)

## Métodos

- [close()](https://www.w3api.com/WebAPI/WebSocket/close/)
- [send()](https://www.w3api.com/WebAPI/WebSocket/send/)

## Eventos

- [close](https://www.w3api.com/WebAPI/WebSocket/close_evento/)
- [error](https://www.w3api.com/WebAPI/WebSocket/error/)
- [message](https://www.w3api.com/WebAPI/WebSocket/message/)
- [open](https://www.w3api.com/WebAPI/WebSocket/open/)

## Ejemplo


Este es un ejemplo básico para poder crear un `WebSocket` :


```javascript
// Crear una nueva conexión WebSocket
const socket = new WebSocket('ws://ejemplo.com/socket');

// Manejar la apertura de la conexión
socket.addEventListener('open', (event) => {
    console.log('Conexión establecida');
    socket.send('¡Hola, servidor!');
});

// Escuchar mensajes entrantes
socket.addEventListener('message', (event) => {
    console.log('Mensaje recibido:', event.data);
});

// Manejar errores
socket.addEventListener('error', (event) => {
    console.error('Error en WebSocket:', event);
});

// Cerrar la conexión
socket.addEventListener('close', (event) => {
    console.log('Conexión cerrada');
});
```


## Artículos

- [Websocket Echo en Java EE](https://lineadecodigo.com/java/websocket-echo-en-java-ee/)
