---
title: WebSocket.close()
permalink: /WebAPI/WebSocket/close/
excerpt: "El método close del objeto WebSocket cierra la conexión con el servidor."
date: 2025-02-04
last_modified_at: 2025-02-04
key: WebAPI.W.WebSocket.close
category: WebAPI
tags: [metodo webapi]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


El método `.close()` del objeto [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/) cierra la conexión o intenta cerrar la conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/). Este método puede ser invocado cuando queramos finalizar la comunicación bidireccional con el servidor.


Se puede lanzar la excepción [`DOMException`](https://www.w3api.com/WebAPI/DOMException/) cuando el código de cierre no está en el rango válido (1000-4999) siendo un error `InvalidAccessError` o cuando la cadena de razón es demasiado larga, siendo el error un `SyntaxError`. Es importante manejar estas excepciones adecuadamente para garantizar un cierre controlado de la conexión [`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/).


## Sintaxis


```javascript
close()
close(code)
close(code, reason)
```


## Parámetros

- **code,** un número entero opcional que indica el código de estado del cierre de la conexión WebSocket. Este código debe estar en el rango de 1000 a 4999, siendo los códigos más comunes 1000 (cierre normal) y 1001 (el cliente se está apagando). Puedes consultar [todos los códigos en la RFC del Protocolo WebSocket](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1).
- **reason,** una cadena de texto opcional que proporciona una descripción legible del motivo por el cual se está cerrando la conexión. Esta cadena no debe exceder los 123 bytes de longitud cuando se codifica en UTF-8.

## Excepciones


[`DOMException`](https://www.w3api.com/WebAPI/DOMException/)


## Objeto Padre


[`WebSocket`](https://www.w3api.com/WebAPI/WebSocket/)


## Ejemplo


A continuación se muestra un ejemplo de cómo cerrar una conexión WebSocket:


```javascript
// Crear una conexión WebSocket
const ws = new WebSocket('wss://echo.websocket.org');

// Cuando queramos cerrar la conexión
ws.close(1000, 'Cerrando la conexión normalmente');

// Manejar el evento de cierre
ws.addEventListener('close', (event) => {
    console.log('Conexión cerrada:', event.code, event.reason);
});
```


## Artículos

- [Websocket Echo en Java EE](https://lineadecodigo.com/java/websocket-echo-en-java-ee/)
