---
title: onratechange
permalink: /HTML/onratechange/
excerpt: "El evento onratechange en HTML se dispara cuando cambia la velocidad de reproducción de un elemento multimedia, como video o audio."
date: 2024-01-20
last_modified_at: 2024-02-07
key: HTML.o.onratechange
category: HTML
tags: [evento html]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `onratechange` de [HTML](https://www.manualweb.net/html/) se dispara cuando la velocidad de reproducción de un elemento multimedia cambia, como un video o audio. Esto puede ser útil para actualizar la interfaz del usuario en respuesta a la velocidad de reproducción cambiada por el usuario, o para realizar acciones específicas en función de la velocidad de reproducción.


## Sintaxis


```html
<element onratechange="myScript">
```


## Ejemplo


```html
<video id="myVideo" controls onratechange="alert('Cambio velocidad!')">
  <source src="movie.mp4" type="video/mp4">
</video>
```


## Artículos

- 
