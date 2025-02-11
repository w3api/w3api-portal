---
title: onvolumechange
permalink: /HTML/onvolumechange/
excerpt: "El evento onvolumechange se activa al cambiar el volumen de audio o vídeo."
date: 2024-01-18
last_modified_at: 2025-02-11
key: HTML.o.onvolumechange
category: HTML
tags: [evento html,html 5]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `onvolumechange` en [HTML](https://www.manualweb.net/html/) se activa cuando el volumen de un elemento de audio o vídeo se cambia. Este evento también se activa cuando el sonido se silencia o se activa.


## Sintaxis


```html
<elemento onvolumenchange="funcion()">
```


## Ejemplo


```html
<video controls onvolumechange="alert('El volumen ha cambiado!')">
  <source src="video.mp4" type="video/mp4">
</video>
```


## Artículos

- [Cambios de volumen en vídeos HTML5](https://lineadecodigo.com/html5/cambios-de-volumen-en-videos-html5/)
