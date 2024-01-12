---
title: border-radius
permalink: /CSS/border-radius/
excerpt: "La propiedad border-radius en CSS permite agregar esquinas redondeadas a elementos. Se especifica con valores de radio y afecta a las cuatro esquinas. Ejemplo: border-radius: 25px."
date: 2024-01-12
last_modified_at: 2024-01-12
key: CSS.b.border-radius
category: CSS
tags: [propiedad css,css 3]
image: "/assets/images/css.png"
sidebar:
  nav: css
---

## Descripción


La propiedad `border-radius` en [CSS](https://www.manualweb.net/css/) se utiliza para agregar bordes redondeados a un elemento. Esto se logra especificando uno o más valores de radio, que definen el tamaño y la forma de la esquina redondeada.


## Sintaxis


```css
border-radius : <length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?
```


## Valores

- **length,** Denota el tamaño del radio del círculo, o los ejes semi-mayor y semi-menor de la elipse, utilizando valores de longitud. Los valores negativos son inválidos.
- **percentage,** Denota el tamaño del radio del círculo, o los ejes semi-mayor y semi-menor de la elipse, utilizando valores porcentuales. Los porcentajes para el eje horizontal se refieren al ancho del cuadro; los porcentajes para el eje vertical se refieren a la altura del cuadro. Los valores negativos son inválidos.

Se pueden especificar hasta cuatro valores, que corresponden a las esquinas superior izquierda, superior derecha, inferior derecha e inferior izquierda, respectivamente. Si se especifica un solo valor, se aplica a todas las esquinas. Y si se aplican dos valores, el primero se aplica a las esquinas superior izquierda e inferior derecha, y el segundo a las esquinas superior derecha e inferior izquierda.


## Ejemplo


Aquí hay un ejemplo de cómo usar `border-radius`:


```css
div {
  border: 2px solid;
  border-radius: 25px;
}

```


En este ejemplo, todas las esquinas del elemento `div` se redondearán con un radio de 25px.


## Artículos

- [Redondear bordes con CSS](https://lineadecodigo.com/css/redondear-bordes-con-css/)
