---
title: EventTarget.addEventListener()
permalink: /DOM/EventTarget/addEventListener/
excerpt: "El método addEventListener permite asociar gestores de eventos a elementos del DOM."
date: 2023-01-31
last_modified_at: 2025-02-20
key: DOM.E.EventTarget.addEventListener
category: DOM
tags: [metodo dom]
image: "/assets/images/dom.png"
sidebar:
  nav: dom
---

## **Descripción**


El método `addEventListener()` nos permite asociar un **gestor de eventos**  a un determinado elemento, cuando se produzca un evento en concreto.


El elemento al que podemos asociar el control de eventos con `addEventListener()` puede ser un [`Element`](https://www.w3api.com/DOM/Element/), [`Document`](https://www.w3api.com/DOM/Document/) o [`Window`](https://www.w3api.com/DOM/Window/).


Como **gestor de eventos** podemos tener **una función** o un o**bjeto que implemente el interface** [**`EventListener`**](https://www.w3api.com/DOM/EventListener/). En este caso la función que le asociemos puede ser anónima.


## **Sintaxis**


```javascript
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```


## Parámetros

- **type,** es una cadena con el tipo de evento sobre el que queremos registrar el gestor de eventos. Los tipos de eventos están definidos en el interface [`Event`](https://www.w3api.com/DOM/Event/): _‘blur’, ‘click’, ‘dblclick’, ‘copy’, ‘focus’_,…
- **listener,** es el objeto que recibe la notificación y que implementa un interface [`Event`](https://www.w3api.com/DOM/Event/). Por lo que los valores pueden ser `null`, un objeto con el método `handleEvent()` o una función [Javascript](https://www.manualweb.net/javascript/).
- **options,** nos permite especificar características del gestor de eventos. Entre las opciones tenemos:
	- `capture`, los eventos serán enviados al listener antes que a cualquier [`EventTarget`](https://www.w3api.com/DOM/EventTarget/) que pueda existir dentro del árbol [DOM](https://www.manualweb.net/dom/). Por defecto tiene un valor de `false`.
	- `once`, indica que el listener puede ser invocado una única vez. Una vez invocado será eliminado.
	- `passive`, la función nunca llamará al método [`preventDefault()`](https://www.w3api.com/DOM/Event/preventDefault/) y en el caso de que lo hiciese saldría un warning por consola
	- `signal`, el listener será eliminado cuando el método [`abort()`](https://www.w3api.com/DOM/AbortSignal/abort/) de [`AbortSignal`](https://www.w3api.com/DOM/AbortSignal/) es invocado.
- **useCapture,** valor booleano que nos permite controlar la propagación del evento por el árbol [DOM](https://www.manualweb.net/dom/) a diferentes elementos. Por defecto es `false` lo que hará que no haya propagación.

## **Objeto Padre**


[`EventTarget`](https://www.w3api.com/DOM/EventTarget/)


## **Ejemplo**


```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Final de la Música</title>
</head>
<body>
<h1>Final de la Música</h1>

<audio id="miaudio" controls>  
	<source src="mimusica.ogg" type="audio/ogg">
	<source src="mimusica.mp3" type="audio/mpeg">
  Tu navegador no soporta el elemento <code>audio</code>.  
</audio>  

<div id="texto"></div>

<script>

 var reproductor = document.getElementById("miaudio");
 
 reproductor.addEventListener("ended", function(){
	 var texto = document.getElementById("texto");
	 texto.innerHTML = "Fin de la canción";	 
 });
  
</script>


</body>
</html>
```


## **Artículos**

- [Abortar Eventos con Señales](https://lineadecodigo.comhttps//lineadecodigo.com/dom/abortar-eventos-con-senales/)
- [Fin del audio en HTML5](https://lineadecodigo.com/html5/fin-del-audio-html5/)
- [Borrar contenido de capa en Javascript](https://lineadecodigo.com/javascript/borrar-contenido-capa-javascript/)
- [Convertir una cadena a fecha en Javascript](https://lineadecodigo.com/javascript/convertir-una-cadena-a-fecha-en-javascript/)
- [Cortes en la descarga de vídeos HTML5](https://lineadecodigo.com/html5/cortes-en-la-descarga-de-videos-html5/)
- [Crear eventos con JavaScript](https://lineadecodigo.com/javascript/crear-eventos-con-javascript/)
- [Ejecutar un evento una única vez](https://lineadecodigo.com/dom/ejecutar-un-evento-una-unica-vez/)
- [Pasar datos a un listener](https://lineadecodigo.com/dom/pasar-datos-a-un-listener/)
- [Evitar el envío de un formulario](https://lineadecodigo.com/dom/evitar-el-envio-de-un-formulario/)
- [Hacer foco en un elemento sin scroll](https://lineadecodigo.com/dom/hacer-foco-en-un-elemento-sin-scroll/)
