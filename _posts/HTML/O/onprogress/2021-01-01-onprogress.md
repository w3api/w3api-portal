---
title: onprogress
permalink: /HTML/onprogress/
excerpt: "El evento onprogress de HTML muestra el progreso de una descarga en la interfaz de usuario. Utilizado en elementos de video para actualizar una barra de progreso durante la descarga del video."
date: 2024-01-20
last_modified_at: 2024-02-07
key: HTML.o.onprogress
category: HTML
tags: [evento html]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `onprogress` de [HTML](https://www.manualweb.net/html/) es un evento que se dispara cuando un recurso que está siendo descargado del servidor se encuentra en proceso. Este evento se utiliza a menudo para mostrar el progreso de una descarga en la interfaz de usuario.


## Sintaxis


El evento `onprogress` se implementa en [HTML](https://www.manualweb.net/html/) de la siguiente manera:


```html
<elemento onprogress="script">
```


## Ejemplo


```html
<video src="video.mp4" onprogress="updateProgress(event)">
<progress value="0" max="100"></progress>

<script>
function updateProgress(event) {
  var percent = (event.loaded / event.total) * 100;
  document.getElementById('progress').style.width = percent + '%';
}
</script>

```


Este fragmento de código JavaScript define la función `updateProgress` que se llama cada vez que se dispara el evento `onprogress`. Actualiza el ancho de un elemento con el id 'progress' para reflejar el porcentaje de la descarga que se ha completado.


Este ejemplo muestra cómo utilizar el evento `onprogress` en un elemento de video para actualizar una barra de progreso durante la descarga del video.


## Artículos

- 
