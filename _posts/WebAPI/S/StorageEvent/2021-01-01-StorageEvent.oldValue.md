---
title: StorageEvent.oldValue
permalink: /WebAPI/StorageEvent/oldValue/
date: 2023-05-27
key: WebAPI.S.StorageEvent.oldValue
category: WebAPI
tags: [propiedad webapi]
sidebar:
  nav: webapi
---

## **Descripción**


Propiedad del interface [`StorageEvent`](https://w3api.com/WebAPI/StorageEvent/) que devuelve una cadena con al **valor anterior a la modificación** sobre la clave que ha sido modificada dentro de la LocalStorage. En el caso de que la clave sea nueva y no existiese dentro de la LocalStorage se devolverá un valor de `null`.


## **Sintaxis**


```javascript
StorageEvent.oldValue
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
