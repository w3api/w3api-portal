---
title: MessageEvent.data
permalink: /HTMLDOM/MessageEvent/data/
date: 2023-09-23
key: HTMLDOM.M.MessageEvent.data
category: HTMLDOM
tags: [propiedad htmldom]
sidebar:
  nav: htmldom
---

## **Descripción**


Datos enviados por el emisor del mensaje.


## **Sintaxis**


```javascript
MessageEvent.data
```


## Objeto Padre


[MessageEvent](http://www.w3api.com/HTMLDOM/MessageEvent/)


## **Ejemplo**


```javascript
<body onmessage="mensajeRecibido(event);">
    
  <h1>Web Messaging</h1>
  <button id="boton">Enviar Mensaje</button>
  <p id="texto"></p>

  <script>
    function mensajeRecibido(e) {
      texto = document.getElementById("texto");
      texto.innerHTML = "Mensaje Recibido: "  + e.data;            
    }

    boton = document.getElementById("boton");
    boton.addEventListener("click",function(){
      window.postMessage("Mensaje para la ventana");
    })      
</script>

</body>
```


## **Artículos**

- 
