---
title: StorageEvent.newValue
permalink: /WebAPI/StorageEvent/newValue/
date: 2023-05-27
key: WebAPI.S.StorageEvent.newValue
category: WebAPI
tags: [propiedad webapi]
sidebar:
  nav: webapi
---

## **Descripción**


Propiedad del interface [`StorageEvent`](https://w3api.com/WebAPI/StorageEvent/) que devuelve una cadena con el **nuevo valo**r de la clave que ha sido modificada dentro de la LocalStorage. En el caso de que el evento proceda un proceso de limpieza el valor será `null`.


## **Sintaxis**


```javascript
StorageEvent.newValue
```


## Objeto Padre


[`StorageEvent`](https://w3api.com/WebAPI/StorageEvent/)


## **Ejemplo**


```javascript
window.addEventListener("storage",function(e){
        let cambios = document.getElementById("cambios");
        cambios.innerHTML = cambios.innerHTML + "La clave " + e.key 
												+ " cambia su antiguo valor de '" + e.oldValue 
												+ "' por el nuevo valor '" + e.newValue + "'.<br>";
});
```


## **Artículos**

- [Cambios en WebStorage](https://lineadecodigo.com/html5/cambios-en-webstorage/)
