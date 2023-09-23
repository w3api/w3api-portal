---
title: WindowProxy
permalink: /WebAPI/WindowProxy/
date: 2023-05-27
key: WebAPI.W.WindowProxy
category: WebAPI
tags: [interface webapi]
sidebar:
  nav: webapi
---

## **Descripción**


El `WindowProxy` es un objeto que envuelve al objeto [`Window`](https://www.w3api.com/DOM/Window/) permitiendo ejecutar sus métodos a través de él.


## **Sintaxis**


```javascript
WindowProxy
```


## **Constructores**

- N/A

## Propiedades

- 

## **Métodos**

- 

## Eventos

- 

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

- 
