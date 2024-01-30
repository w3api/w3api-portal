---
title: onwaiting
permalink: /HTML/onwaiting/
excerpt: "El evento onwaiting de HTML se dispara cuando la reproducción se detiene debido a una demora en la obtención de datos, como en elementos de medios como video y audio."
date: 2024-01-18
last_modified_at: 2024-01-30
key: HTML.o.onwaiting
category: HTML
tags: [evento html,html 5]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `onwaiting` de HTML es disparado cuando la reproducción se ha detenido debido a una demora en la obtención de datos. Este evento es comúnmente utilizado en elementos de medios, como [`audio`](https://www.w3api.com/HTML/audio/) y [`video`](https://www.w3api.com/HTML/video/), para indicar que la reproducción está en espera debido a la carga de datos.


## Sintaxis


```html
<elemento onwaiting="funcion()">
```


## Ejemplo


```html
<video onwaiting="miFuncion()">
  <source src="video.mp4" type="video/mp4">
</video>

```


En este ejemplo, el evento `onwaiting` es disparado cuando la reproducción del video está en espera debido a la carga de datos, activando la función `miFuncion()`.


## Artículos

- 
