---
title: onsuspend
permalink: /HTML/onsuspend/
excerpt: "El evento onsuspend de HTML se dispara cuando la carga de un recurso de medios se suspende intencionalmente."
date: 2024-01-19
last_modified_at: 2024-01-31
key: HTML.o.onsuspend
category: HTML
tags: [evento html,html 5]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `onsuspend` de [HTML](https://www.manualweb.net/html/) es un evento global que se dispara cuando la carga de un recurso de medios se ha suspendido intencionalmente. Este evento es útil para controlar el estado de la carga de los medios en una página web.


## Sintaxis


La sintaxis para usar el evento `onsuspend` en [HTML](https://www.manualweb.net/html/) es la siguiente:


```html
<elemento onsuspend="script">

```


En la línea anterior, "elemento" se refiere al elemento HTML en el que se va a utilizar el evento, y "script" es el script que se ejecutará cuando se dispare el evento.


## Ejemplo


Aquí hay un ejemplo de cómo usar el evento `onsuspend` en un elemento de audio:


```html
<audio src="audio.mp3" onsuspend="alert('La carga de audio se ha suspendido')">

```


En este ejemplo, se muestra una alerta cuando la carga del archivo de audio se suspende.


## Artículos

- 
