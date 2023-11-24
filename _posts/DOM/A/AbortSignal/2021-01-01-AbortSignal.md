---
title: AbortSignal
permalink: /DOM/AbortSignal/
date: 2023-10-12
key: DOM.A.AbortSignal
category: DOM
tags: [interface dom]
sidebar:
  nav: dom
---

## Descripción


## Sintaxis


```javascript
AbortSignal
```


## Constructores

- 

## Propiedades

- [aborted](https://www.w3api.com/DOM/AbortSignal/aborted/)
- [reason](https://www.w3api.com/DOM/AbortSignal/reason/)

## Métodos

- [throwIfAborted()](https://www.w3api.com/DOM/AbortSignal/throwIfAborted/)
- [abort()](https://www.w3api.com/DOM/AbortSignal/abort/)
- [timeout()](https://www.w3api.com/DOM/AbortSignal/timeout/)

## Eventos

- [abort](https://www.w3api.com/DOM/AbortSignal/abort/)

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

- 
