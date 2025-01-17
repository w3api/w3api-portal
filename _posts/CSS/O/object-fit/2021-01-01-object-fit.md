---
title: object-fit
permalink: /CSS/object-fit/
excerpt: "La propiedad object-fit ajusta imágenes y videos en contenedores manteniendo proporciones."
date: 2025-01-16
last_modified_at: 2025-01-17
key: CSS.o.object-fit
category: CSS
tags: [propiedad css,css 3]
image: "/assets/images/css.png"
sidebar:
  nav: css
---

## Descripción


La propiedad `object-fit` de [CSS](https://www.manualweb.net/css/) nos permite especificar cómo se debe redimensionar una imagen o video para ajustarse a su contenedor. Esta propiedad es especialmente útil cuando trabajamos con elementos multimedia que necesitan mantener sus proporciones o ajustarse de manera específica dentro de un elemento contenedor.


Es muy útil combinada con la propiedad `aspect-ratio`.


## Sintaxis


```css
object-fit : fill | contain | cover | none | scale-down
```


## Valores


Los valores de la propiedad object-fit son los siguientes, cada uno con un comportamiento específico para el ajuste de las imágenes o videos dentro de su contenedor:

- **scale-down**, que selecciona automáticamente el menor tamaño posible entre 'none' y 'contain',
- **none**, que mantiene el tamaño original del elemento sin realizar ningún tipo de ajuste,
- **cover**, que ajusta el contenido para cubrir completamente el contenedor manteniendo la proporción,
- **fill**, que estira el contenido para llenar el contenedor sin mantener la proporción original,
- **contain**, que ajusta el contenido dentro del contenedor manteniendo sus proporciones originales,

## Ejemplo


Veamos un ejemplo práctico de cómo utilizar la propiedad `object-fit` en una imagen:


```html

<!DOCTYPE html>
<html>
  <head>
    <title>Propiedad object-fit</title>
    <style>
    
      .imagen-ajustada {
        object-fit: cover;
        width: 100px;
        height: 150px;
      }
      
      .imagen-contenida {
        object-fit: contain;
        width: 100px;
        height: 150px;
      }
    </style>
  </head>
  <body>
      <h1>Manejo de Aspect-Ratio</h1>
      
        <img src="paisaje.jpg" class="imagen-contenida">
        <img src="paisaje.jpg" class="imagen-ajustada">
      
  </body>
</html>
```


## Artículos

- [Atributo aspect-ratio en CSS](https://lineadecodigo.com/css/propiedad-aspect-ratio-de-css/)
