---
title: onslotchange
permalink: /HTML/onslotchange/
excerpt: "El evento onslotchange en HTML se dispara cuando el contenido de un elemento slot cambia, permitiendo acciones basadas en los elementos distribuidos por el slot."
date: 2024-01-19
last_modified_at: 2024-01-31
key: HTML.o.onslotchange
category: HTML
tags: [evento html,html 5]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `onslotchange` de [HTML](https://www.manualweb.net/html/) se dispara cuando el contenido de un elemento [`slot`](https://www.w3api.com/HTML/slot/) cambia. Este evento permite a los desarrolladores realizar acciones basadas en cambios en los elementos que están siendo distribuidos por un elemento [`slot`](https://www.w3api.com/HTML/slot/).


## Sintaxis


El evento `onslotchange` se utiliza de la siguiente manera:


```html
<slot onslotchange="miFuncion">
  <!-- Contenido distribuido aquí -->
</slot>
```


## Ejemplo


Aquí se muestra un ejemplo simple de cómo se puede utilizar el evento `onslotchange`:


```html
<slot onslotchange="alert('El contenido del slot ha cambiado')">
  <!-- Cuando el contenido de este slot cambie, se mostrará una alerta -->
</slot>
```


## Artículos

- 
