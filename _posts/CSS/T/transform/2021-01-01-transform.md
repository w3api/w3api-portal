---
title: transform
permalink: /CSS/transform/
excerpt: "La propiedad transform permite aplicar transformaciones 2D o 3D a elementos HTML."
date: 2025-02-18
last_modified_at: 2025-02-18
key: CSS.t.transform
category: CSS
tags: [propiedad css,css 3,css transforms]
image: "/assets/images/css.png"
sidebar:
  nav: css
---

## Descripción


La propiedad `transform` de [CSS](https://www.manualweb.net/css/) nos permite aplicar transformaciones 2D o 3D a elementos [HTML](https://www.manualweb.net/html/). Con esta propiedad podemos rotar, escalar, mover, sesgar o aplicar matrices de transformación a los elementos.


Para ello nos apoyamos en una serie de funciones que nos permiten realizar las transformaciones. Las principales funciones son `rotate()`, `scale()`, `translate()` y `skew()`.


## Sintaxis


```css
transform : none | <transform-list>
```


## Valores

- **none**, valor por defecto que indica que no se aplicará ninguna transformación al elemento,
- **transform-list**, lista de una o más funciones de transformación separadas por espacios que se aplicarán al elemento en el orden especificado,

## Ejemplo


Veamos un ejemplo de cómo podemos aplicar una transformación a un elemento [HTML](https://www.manualweb.net/html/) mediante la propiedad `transform`. En este caso vamos a rotar un elemento 45 grados.


```css
.elemento {
  transform: rotate(45deg);
}
```


## Artículos

- 
