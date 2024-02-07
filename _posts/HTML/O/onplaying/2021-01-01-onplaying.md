---
title: onplaying
permalink: /HTML/onplaying/
excerpt: "El evento onplaying de HTML se dispara al iniciar la reproducción de un elemento multimedia después de estar pausado o detenido."
date: 2024-01-20
last_modified_at: 2024-02-07
key: HTML.o.onplaying
category: HTML
tags: [evento html]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `onplaying` de [HTML](https://www.manualweb.net/html/)


se dispara cuando la reproducción de un elemento multimedia se ha iniciado después de haber estado pausado o detenido por algún motivo. Este evento se utiliza a menudo en combinación con los elementos multimedia [HTML](https://www.manualweb.net/html/) [`audio`](https://www.w3api.com/HTML/audio/) y [`video`](https://www.w3api.com/HTML/video/).


## Sintaxis


```html
<elemento onplaying="myScript">
```


Donde `elemento` es cualquier elemento multimedia compatible con [HTML](https://www.manualweb.net/html/) como [`audio`](https://www.w3api.com/HTML/audio/) o [`video`](https://www.w3api.com/HTML/video/), y `myScript` es la función JavaScript que se ejecutará cuando el evento `onplaying` se dispare.


## Ejemplo


```html
<video onplaying="myFunction()" controls>
  <source src="video.mp4" type="video/mp4">
</video>

<script>
function myFunction() {
  alert("El video ha comenzado a reproducirse");
}
</script>

```


En este ejemplo, cuando el video comienza a reproducirse, se ejecutará la función `myFunction()`, que mostrará una alerta con el mensaje "El video ha comenzado a reproducirse".


## Artículos

- 
