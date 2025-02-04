---
title: WebSocket.send()
permalink: /WebAPI/WebSocket/send/
excerpt: "El método send permite enviar datos a través de una conexión WebSocket establecida."
date: 2025-02-04
last_modified_at: 2025-02-04
key: WebAPI.W.WebSocket.send
category: WebAPI
tags: [metodo webapi]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


El método `send()` del objeto [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) permite enviar datos a través de una conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) establecida. Los datos pueden ser de diferentes tipos como cadenas de texto, ArrayBuffer, Blob o datos binarios. El método es asíncrono y no espera a que los datos sean enviados para continuar con la ejecución del código.


El error `InvalidStateError` se produce cuando se intenta enviar datos a través de una conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) que no está en el estado OPEN, es decir, cuando la conexión no se ha establecido correctamente o ya se ha cerrado y por lo tanto se genera una [`DOMException`](https://w3api.com/WebAPI/DOMException/).


## Sintaxis


```javascript
send(data)
```


## Parámetros

- **data,**los datos que se pueden enviar al servidor a través de la conexión WebSocket pueden ser de los siguientes tipos fundamentales, cada uno con sus propias características y casos de uso específicos:
	- **String,** que permite enviar texto plano o datos formateados como JSON en un encoding utf-8.
	- **ArrayBuffer,** útil para transmitir datos binarios de longitud fija
	- **Blob,** ideal para el envío de archivos y datos binarios de gran tamaño
	- **TypedArray o DataView**, que proporcionan una manera estructurada de trabajar con datos binarios,

## Excepciones


[`DOMException`](https://w3api.com/WebAPI/DOMException/)


## Objeto Padre


[`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/)


## Ejemplo


En el siguiente ejemplo se muestra cómo establecer una conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) y enviar datos al servidor utilizando el método `send()`:


```javascript
// Crear una nueva conexión WebSocket
const ws = new WebSocket('ws://ejemplo.com/socket');

// Cuando la conexión está abierta, enviamos datos
ws.onopen = function() {
    // Enviar una cadena de texto
    ws.send('Hola Servidor');
    
    // Enviar datos JSON
    ws.send(JSON.stringify({mensaje: 'Hola', tipo: 'saludo'}));
    
    // Enviar datos binarios
    const buffer = new ArrayBuffer(4);
    ws.send(buffer);
};
```


## Artículos

- [Websocket Echo en Java EE](https://lineadecodigo.com/java/websocket-echo-en-java-ee/)
