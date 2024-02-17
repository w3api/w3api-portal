---
title: overflow-wrap
permalink: /CSS/overflow-wrap/
excerpt: "La propiedad overflow-wrap en CSS permite dividir líneas largas para evitar desbordamiento de contenido. Es útil para ajustes de línea."
date: 2024-02-17
last_modified_at: 2024-02-17
key: CSS.o.overflow-wrap
category: CSS
tags: [propiedad css,css 3,css text module]
image: "/assets/images/css.png"
sidebar:
  nav: css
---

## Descripción


La propiedad `overflow-wrap` en [CSS](https://www.manualweb.net/css/) especifica cómo debe dividirse una línea que de otro modo sería demasiado larga para caber en su contenedor. Es muy útil para prevenir el desbordamiento de contenido.


## Sintaxis


```css
overflow-wrap : normal | break-word | anywhere
```


## Valores


La propiedad `overflow-wrap` puede tomar uno de los siguientes tres valores:

- **normal**: Este es el valor predeterminado. No permite que las palabras se rompan a menos que haya espacios disponibles.
- **break-word**: Permite que las palabras se rompan para evitar el desbordamiento.
- **anywhere**: Similar a 'break-word', pero con la diferencia de que puede romper palabras en cualquier punto, incluso si ello resulta en la creación de espacios no utilizados.

## Ejemplo


```css
p {
  overflow-wrap: break-word;
}

```


En este ejemplo, el texto dentro del elemento `<p>` se romperá para evitar el desbordamiento.


## Artículos

- [Ajustes de línea con CSS](http://lineadecodigo.com/css/ajustes-de-linea-con-css/)
