---
title: HTMLMediaElement.currentTime
permalink: /HTMLDOM/HTMLMediaElement/currentTime/
excerpt: "La propiedad currentTime permite obtener o establecer el tiempo de reproducción en multimedia."
date: 2025-02-09
last_modified_at: 2025-02-10
key: HTMLDOM.H.HTMLMediaElement.currentTime
category: HTMLDOM
tags: [propiedad htmldom,dom level 2]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


La propiedad `currentTime` del elemento [`HTMLMediaElement`](https://www.w3api.com/HTMLDOM/HTMLMediaElement/)  nos permite obtener o establecer el tiempo actual de reproducción del elemento multimedia en segundos. Esta propiedad es especialmente útil para controlar la posición de reproducción en archivos de audio o vídeo.


El valor de `currentTime` es en formato segundos, representando un número de punto flotante. Por ejemplo, 10.5 segundos o 65.2 segundos. El valor devuelto siempre será el tiempo más cercano disponible a la posición de reproducción actual.


## Sintaxis


```javascript
HTMLMediaElement.currentTime
```


## Objeto Padre


[`HTMLMediaElement`](https://www.w3api.com/HTMLDOM/HTMLMediaElement/) 


## Ejemplo


En el siguiente ejemplo podemos ver cómo podemos obtener y establecer el tiempo actual de reproducción de un elemento de vídeo:


```javascript
// Obtener el elemento de vídeo
const video = document.getElementById('miVideo');

// Obtener el tiempo actual de reproducción
console.log(video.currentTime); // Muestra el tiempo actual en segundos

// Establecer el tiempo de reproducción a 30 segundos
video.currentTime = 30;
```


## Artículos

- [Buscar por un vídeo en HTML5](https://lineadecodigo.com/html5/buscar-por-un-video-en-html5/)
