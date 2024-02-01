---
title: onseeking
permalink: /HTML/onseeking/
excerpt: "El evento onseeking en HTML se activa al mover el control de tiempo de un elemento de audio o video. Útil para proporcionar retroalimentación visual durante el desplazamiento."
date: 2024-01-19
last_modified_at: 2024-02-01
key: HTML.o.onseeking
category: HTML
tags: [evento html,html 5]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `onseeking` de [HTML](https://www.manualweb.net/html/) se dispara cuando el usuario comienza a mover el control de tiempo de un elemento de audio o video. Este evento puede ser útil para proporcionar retroalimentación visual al usuario durante el desplazamiento, como mostrar una imagen en miniatura del cuadro actual en el video.


## Sintaxis


La sintaxis básica de la etiqueta `onseeking` es la siguiente:


```html
<elemento onseeking="script">
```


## Ejemplo


Aquí hay un ejemplo de cómo se puede usar la etiqueta `onseeking` en un elemento de video:


```html
<video onseeking="myFunction()">
  <source src="video.mp4" type="video/mp4">
</video>

```


En este caso, cuando el usuario comienza a mover el control de tiempo, se activa la función `myFunction()`.


## Artículos

- 
