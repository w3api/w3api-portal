---
title: style (elemento)
permalink: /HTML/style-elemento/
excerpt: "El elemento style en HTML se utiliza para incrustar información de estilo en un documento HTML o XML. Puede ser ubicado en el cuerpo o en la cabecera del documento."
date: 2024-01-08
last_modified_at: 2024-01-10
key: HTML.s.style-elemento
category: HTML
tags: [elemento html,html 4.01,html 5,html 3.2]
image: "/assets/images/HTML.png"
sidebar:
  nav: html
---

## Descripción


El elemento `style` dentro de [HTML](https://www.manualweb.net/html/) se utiliza para incrustar información de estilo ([CSS](https://www.manualweb.net/css/)) en un documento [HTML](https://www.manualweb.net/html/) o [XML](https://www.manualweb.net/xml/). Este elemento puede ser ubicado dentro del cuerpo que definimos con el elemento [`body`](https://www.w3api.com/HTML/body/) o en la cabecera mediante o elemento [`head`](https://www.w3api.com/HTML/head/) del documento, dependiendo del alcance que se desee para los estilos definidos.


## Sintaxis


El elemento `style` se escribe de la siguiente manera:


```html
<style>
  /* Aquí van los estilos CSS */
</style>
```


## Ejemplo


```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: red;
      text-align: center;
    }
  </style>
</head>
<body>

<p>¡Hola mundo!</p>

</body>
</html>

```


En este ejemplo, todos los párrafos en la página se mostrarán en color rojo y estarán centrados.


## Artículos

- [Definir el tamaño de una imagen con CSS](https://lineadecodigo.com/css/definir-el-tamano-de-una-imagen-con-css/)
