---
title: WebSocket.open
permalink: /WebAPI/WebSocket/open/
excerpt: "El evento open indica que la conexión WebSocket se ha establecido correctamente."
date: 2025-02-04
last_modified_at: 2025-02-04
key: WebAPI.W.WebSocket.open
category: WebAPI
tags: [evento webapi]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


El evento `open` del objeto [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) se lanza cuando la conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) se ha establecido correctamente con el servidor. Este evento nos indica que podemos empezar a enviar y recibir datos mediante el [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) de forma bidireccional.


## Sintaxis


```javascript
WebSocket.open
```


## Objeto Padre


[`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/)


## Ejemplo


En el siguiente ejemplo podemos ver cómo gestionar el evento `open` del objeto [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) para saber cuándo se ha establecido la conexión con el servidor.


```javascript
// Crear una nueva conexión WebSocket
const ws = new WebSocket('ws://localhost:8080');

// Manejar el evento open
ws.addEventListener('open', (event) => {
    console.log('Conexión WebSocket establecida');
    // Ahora podemos empezar a enviar mensajes
    ws.send('¡Hola servidor!');
});
```


## Artículos

- [Websocket Echo en Java EE](https://lineadecodigo.com/java/websocket-echo-en-java-ee/)
