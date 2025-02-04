---
title: WebSocket.WebSocket()
permalink: /WebAPI/WebSocket/WebSocket/
excerpt: "El constructor WebSocket permite establecer conexiones en tiempo real con servidores remotos."
date: 2025-02-04
last_modified_at: 2025-02-04
key: WebAPI.W.WebSocket.WebSocket
category: WebAPI
tags: [constructor webapi]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


El constructor del objeto [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) permite crear una conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) con un servidor remoto. Este constructor es la forma de inicializar una conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) que nos permitirá establecer una comunicación bidireccional y en tiempo real entre el navegador y el servidor.


Se lanzará una excepción [`SyntaxError`](https://www.w3api.com/Javascript/SyntaxError/) si la URL proporcionada no es válida o no cumple con el formato requerido para una conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/). 


## Sintaxis


```javascript
new WebSocket(url)
new WebSocket(url, protocols)
```


## Parámetros

- **url,** La dirección URL del servidor WebSocket al que se desea conectar. Debe comenzar con el protocolo `ws://` para conexiones no seguras o `wss://` para conexiones seguras.
- **protocols,** Un protocolo o array de protocolos que se utilizarán en la conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/). Este parámetro es opcional y permite especificar los subprotocolos de comunicación que se negociarán con el servidor.

## Objeto Padre


[`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/)


## Ejemplo


```javascript
// Crear una nueva conexión WebSocket
const ws = new WebSocket('ws://localhost:8080');

// Manejar eventos de conexión
ws.onopen = () => {
  console.log('Conectado al servidor WebSocket');
};
```


## Artículos

- [Websocket Echo en Java EE](https://lineadecodigo.com/java/websocket-echo-en-java-ee/)
