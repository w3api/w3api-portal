---
title: EventTarget
permalink: /DOM/EventTarget/
date: 2023-10-12
key: DOM.E.EventTarget
category: DOM
tags: [interface dom]
sidebar:
  nav: dom
---

## Descripción


El interface `EventTarget` es el que implementan los objetos que pueden recibir eventos y a los que podemos asociarles un listener para manejarlos


## Sintaxis


```javascript
EventTarget
```


## Constructores

- [EventTarget()](https://www.w3api.com/DOM/EventTarget/EventTarget/)

## Propiedades

- N/A

## Métodos

- [addEventListener()](https://www.w3api.com/DOM/EventTarget/addEventListener/)
- [removeEventListener()](https://www.w3api.com/DOM/EventTarget/removeEventListener/)
- [dispatchEvent()](https://www.w3api.com/DOM/EventTarget/dispatchEvent/)

## Eventos

- N/A

## Ejemplo


```javascript
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


## Artículos

- [Fin del audio en HTML5](https://lineadecodigo.com/html5/fin-del-audio-html5/)
- [Borrar contenido de capa en Javascript](https://lineadecodigo.com/javascript/borrar-contenido-capa-javascript/)
- [Convertir una cadena a fecha en Javascript](https://lineadecodigo.com/javascript/convertir-una-cadena-a-fecha-en-javascript/)
- [Crear eventos con JavaScript](https://lineadecodigo.com/javascript/crear-eventos-con-javascript/)
