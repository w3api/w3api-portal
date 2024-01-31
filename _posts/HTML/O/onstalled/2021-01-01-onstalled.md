---
title: onstalled
permalink: /HTML/onstalled/
excerpt: "El evento onstalled en HTML se dispara cuando el navegador no puede obtener datos de medios, alertando al usuario sobre problemas de conexión."
date: 2024-01-19
last_modified_at: 2024-01-31
key: HTML.o.onstalled
category: HTML
tags: [evento html,html 5]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `onstalled` de [HTML](https://www.manualweb.net/html/) es un evento global que se dispara cuando el navegador no puede obtener los datos de los medios por algún motivo. Este evento puede ser útil para alertar al usuario sobre problemas de conexión o para intentar recuperar los datos de los medios de otra manera.


## Sintaxis


```html
<element onstalled="script">
```


## Ejemplo


```html
<video onstalled="alert('La descarga de los medios se ha interrumpido.')">
  <source src="video.mp4" type="video/mp4">
</video>
```


## Artículos

- 
