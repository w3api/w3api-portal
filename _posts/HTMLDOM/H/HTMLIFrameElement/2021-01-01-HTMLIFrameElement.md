---
title: HTMLIFrameElement
permalink: /HTMLDOM/HTMLIFrameElement/
date: 2023-09-24
key: HTMLDOM.H.HTMLIFrameElement
category: HTMLDOM
tags: [interface htmldom]
sidebar:
  nav: htmldom
---

## **Descripción**


`HTMLIFrameElement` es un interface que proporciona acceso a las propiedades y los métodos de un elemento [`iframe`](https://w3api.com/HTML/iframe/).


**Sintaxis**


```javascript
HTMLIFrameElement
```


## **Constructores**

- N/A

## Propiedades

- contentDocument
- [contentWindow](http://www.w3api.com/HTMLDOM/HTMLIFrameElement/contentWindow/)
- featurePolicy
- referrerPolicy
- src
- srcDoc

## **Métodos**

- N/A

## Eventos

- N/A

## **Ejemplo**


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Web Messaging</title>
</head>
<body>

	<h1>Web Messaging</h1>
	<button id="boton">Enviar Mensaje</button>
	<br><br>
	
	<iframe id="myiframe" src="iframe.html"></iframe>
	
	<script>
    boton = document.getElementById("boton");
    boton.addEventListener("click",function() {
      myiframe = document.getElementById("myiframe");
      myiframe.contentWindow.postMessage("Mensaje",'*');
    });
	</script>

</body>
</html>
```


## Artículos

- [Hacer foco en un campo de la página usando Javascript](https://lineadecodigo.com/javascript/hacer-foco-en-un-campo-de-la-pagina-usando-javascript/)
