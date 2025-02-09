---
title: page-break-after
permalink: /CSS/page-break-after/
excerpt: "La propiedad page-break-after controla los saltos de página en documentos impresos."
date: 2025-02-09
last_modified_at: 2025-02-09
key: CSS.p.page-break-after
category: CSS
tags: [propiedad css,css 2.1]
image: "/assets/images/css.png"
sidebar:
  nav: css
---

## Descripción


La propiedad `page-break-after` de [CSS](https://www.manualweb.net/css/) nos permite controlar los saltos de página cuando imprimimos documentos [HTML](https://www.manualweb.net/html/) mediante [CSS](https://www.manualweb.net/css/). Esta propiedad nos ayuda a definir si queremos que se produzca un salto de página después del elemento sobre el que se aplica.


## Sintaxis


```css
page-break-after : auto | always | avoid | left | right | inherit
```


## Valores

- **inherit**, hereda el valor de la propiedad del elemento padre
- **avoid**, evita que se produzca un salto de página después del elemento
- **left**, fuerza un salto de página de tal manera que la siguiente página sea una página izquierda
- **right**, fuerza un salto de página de tal manera que la siguiente página sea una página derecha
- **always**, siempre fuerza un salto de página después del elemento
- **auto**, permite que el navegador decida automáticamente si insertar un salto de página

## Ejemplo


Veamos un ejemplo de cómo podemos utilizar la propiedad `page-break-after` para forzar un salto de página después de una sección de contenido:


```css
.seccion {
  page-break-after: always;
}

.evitar-salto {
  page-break-after: avoid;
}
```


En este ejemplo, cualquier elemento con la clase "seccion" forzará un salto de página después de él, mientras que los elementos con la clase "evitar-salto" evitarán que se produzca un salto de página.


## Artículos

- [Páginas adaptadas para imprimir con CSS](https://lineadecodigo.com/css/paginas-adaptadas-para-imprimir-con-css/)
