---
title: AbortController.signal
permalink: /DOM/AbortController/signal/
date: 2023-10-12
key: DOM.A.AbortController.signal
category: DOM
tags: [propiedad dom]
sidebar:
  nav: dom
---

## Descripción


## Sintaxis


```javascript

```


## Objeto Padre


[AbortController](https://www.w3api.com/DOM/AbortController/)


## Ejemplo


```javascript
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Abortar Eventos</title>
</head>
<body>

  <h1>Abortar Eventos</h1>

  <form>
    <input id="mensaje" type="text" value="0"/>
  </form>

  <button id="inc">Incrementar valor</button>

  <script>

    const boton = document.getElementById("inc");
    const mensaje = document.getElementById("mensaje");
    const controller = new AbortController();

    boton.addEventListener("click", ()=>{

      console.log("Capturo Evento")
      let valor = parseInt(mensaje.value) + 1;
      mensaje.value = valor;

      // La tercera vez que hayamos capturado el evento lo eliminamos
      if (valor == 3)
        controller.abort();
    }, {
      signal: controller.signal
    });


  </script>    
   
</body>
</html>
```


## Artículos

- [Abortar Eventos con Señales](https://lineadecodigo.comhttps//lineadecodigo.com/dom/abortar-eventos-con-senales/)
