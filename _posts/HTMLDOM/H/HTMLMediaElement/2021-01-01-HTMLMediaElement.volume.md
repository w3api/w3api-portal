---
title: HTMLMediaElement.volume
permalink: /HTMLDOM/HTMLMediaElement/volume/
excerpt: "La propiedad volume controla el volumen de reproducción en HTMLMediaElement."
date: 2025-02-09
last_modified_at: 2025-02-11
key: HTMLDOM.H.HTMLMediaElement.volume
category: HTMLDOM
tags: [propiedad htmldom,dom level 2]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


La propiedad `volume` del elemento [`HTMLMediaElement`](https://www.w3api.com/HTMLDOM/HTMLMediaElement/) nos permite controlar el volumen de reproducción del elemento multimedia. Esta propiedad acepta valores entre 0.0 (silencio) y 1.0 (volumen máximo), siendo 1.0 el valor por defecto.


## Sintaxis


```javascript
HTMLMediaElement.volume
```


## Objeto Padre


[`HTMLMediaElement`](https://www.w3api.com/HTMLDOM/HTMLMediaElement/)


## Ejemplo


En el siguiente ejemplo vemos cómo podemos manipular el volumen de un elemento de vídeo mediante la propiedad volume.


```javascript
// Obtener el elemento de vídeo
let video = document.getElementById("mivideo");

// Establecer el volumen al 50%
video.volume = 0.5;

// Silenciar el vídeo
video.volume = 0.0;
```


## Artículos

- [Cambios de volumen en vídeos HTML5](https://lineadecodigo.com/html5/cambios-de-volumen-en-videos-html5/)
