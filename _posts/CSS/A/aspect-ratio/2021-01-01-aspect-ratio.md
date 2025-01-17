---
title: aspect-ratio
permalink: /CSS/aspect-ratio/
excerpt: "La propiedad aspect-ratio en CSS define la relación de aspecto de un elemento."
date: 2025-01-16
last_modified_at: 2025-01-17
key: CSS.a.aspect-ratio
category: CSS
tags: [propiedad css,css 3]
image: "/assets/images/css.png"
sidebar:
  nav: css
---

## Descripción


La propiedad `aspect-ratio` de [CSS](https://www.manualweb.net/css/) nos permite especificar la relación de aspecto preferida para el tamaño de un elemento. Esta propiedad establece una relación proporcional entre el ancho y el alto del elemento, lo que es especialmente útil para mantener las dimensiones deseadas durante el [diseño responsive](https://arquitectoit.com/front/layout-adaptable-en-disenos-sensibles/).


Las relaciones de aspecto más corrientes son:

- **16:9** - La más común para pantallas de TV y monitores modernos
- **4:3** - Formato tradicional usado en monitores antiguos
- **1:1** - Formato cuadrado, popular en redes sociales
- **21:9** - Formato ultrawide usado en monitores panorámicos

## Sintaxis


La sintaxis de la propiedad aspect-ratio es muy sencilla, ya que simplemente necesitamos especificar la relación entre el ancho y el alto del elemento mediante dos números separados por una barra diagonal o dos puntos:


```css
aspect-ratio : <ratio> | <numero> | auto;
```


## Valores


Los valores


que podemos utilizar con la propiedad `aspect-ratio` son:

- **auto -** El navegador calcula automáticamente la relación de aspecto basándose en las dimensiones intrínsecas del elemento
- **ratio -** Especificado como dos números separados por una barra diagonal (16/9) o dos puntos (16:9)
- **número -** Un único número que representa la relación de aspecto (ejemplo: 1.78 para 16:9)

## Ejemplo


Veamos un ejemplo práctico de cómo utilizar la propiedad `aspect-ratio`:


En este caso vamos a crear un contenedor div que mantendrá una relación de aspecto 16:9, lo cual es común para contenido multimedia:


```css
.contenedor-video {
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #f0f0f0;
}

.contenedor-cuadrado {
  width: 300px;
  aspect-ratio: 1/1;
  background-color: #e0e0e0;
}
```


## Artículos

- [Atributo aspect-ratio en CSS](https://lineadecodigo.com/css/propiedad-aspect-ratio-de-css/)
