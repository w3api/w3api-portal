---
title: accesskey
permalink: /HTML/accesskey/
excerpt: "El atributo accesskey se utiliza para asignar atajos de teclado a elementos de la página. Estos atajos pueden variar según el navegador y el sistema operativo. Permite establecer combinaciones de teclas para activar elementos."
date: 2023-02-10
last_modified_at: 2024-01-10
key: HTML.a.accesskey
category: HTML
tags: [atributo global html,atributo html,html 4.01,html 5]
image: "/assets/images/HTML.png"
sidebar:
  nav: html
---

## Descripción


El atributo global `accesskey` nos sirve para indicar un atajo de teclado para un elemento de la página. Se especifica mediante un conjunto de caracteres separados por espacios. Estas letras serán las que sirvan como atajo de teclado. Hay que tener en cuenta que atendiendo al navegador y sistema operativo los atajos de teclado pueden ser diferentes. Así tenemos las siguientes combinaciones para activarlos:


| **Navegador**     | **Windows**         | **Linux**           | **Mac**               |
| ----------------- | ------------------- | ------------------- | --------------------- |
| Firefox           | Alt + Shift + Tecla | Alt + Shift + Tecla | Control + Alt + Tecla |
| Internet Explorer | Alt + Tecla         | N/A                 | N/A                   |
| Google Chrome     | Alt + Tecla         | Alt + Tecla         | Control + Alt + Tecla |
| Safari            | Alt + Tecla         | N/A                 | Control + Alt + Tecla |
| Opera             | Shift + Esc + Tecla | Shift + Esc + Tecla | Shift + Esc + Tecla   |


## Sintaxis


```html
<elemento accesskey="caracter"/>
```


## Ejemplo


```html
<a href="http://www.manualweb.net/html" accesskey="h">HTML</a><br>
<a href="http://www.manualweb.net/java/" accesskey="j">Java</a>
```


## Artículos

