---
title: ontimeupdate
permalink: /HTML/ontimeupdate/
excerpt: "El evento ontimeupdate de HTML se dispara cuando cambia la posición de reproducción de un elemento de medios, utilizado para sincronizar elementos de la página con la reproducción de medios."
date: 2024-01-19
last_modified_at: 2024-01-31
key: HTML.o.ontimeupdate
category: HTML
tags: [evento html,html 5]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `ontimeupdate` de [HTML](https://www.manualweb.net/html/) es disparado cuando la posición de reproducción de un elemento de medios cambia.


Este cambio puede ser causado por la reproducción normal, la búsqueda del usuario o una acción del script. Es comúnmente utilizado para sincronizar otros elementos de la página con la reproducción de medios.


## Sintaxis


La sintaxis para usar el evento `ontimeupdate` es la siguiente:


```html
<elemento ontimeupdate="miFuncion">
```


## Ejemplo


```html
<script>
function miFuncion() {
  var v = document.getElementById("myVideo");
  var t = v.currentTime;
  document.getElementById("demo").innerHTML = Math.round(t);
}
</script>

<div id="demo"></div>
<video id="myVideo" width="320" height="240" controls ontimeupdate="miFuncion()">
  <source src="movie.mp4" type="video/mp4">
</video>
```


## Artículos

- 
