---
title: StorageEvent
permalink: /WebAPI/StorageEvent/
date: 2023-05-27
key: WebAPI.S.StorageEvent
category: WebAPI
tags: [interface webapi]
sidebar:
  nav: webapi
---

## **Descripción**


El interface `StorageEvent` es implementado por el evento “storage” el cual es lanzado cuando se produce un cambio dentro de la `WebStorage`.


## **Sintaxis**


```javascript
StorageEvent
```


## **Constructores**

- StorageEvent()

## Propiedades

- [key](https://www.w3api.com/WebAPI/StorageEvent/key/)
- [newValue](https://www.w3api.com/WebAPI/StorageEvent/newValue/)
- [oldValue](https://www.w3api.com/WebAPI/StorageEvent/oldValue/)
- [storageArea](https://www.w3api.com/WebAPI/StorageEvent/storageArea/)
- url

## **Métodos**

- initStorageEvent()

## Eventos

- N/A

## **Ejemplo**


```javascript
window.addEventListener("storage",function(e){
        let cambios = document.getElementById("cambios");
        cambios.innerHTML = cambios.innerHTML + "La clave " + e.key 
												+ " cambia su antiguo valor de '" + e.oldValue 
												+ "' por el nuevo valor '" + e.newValue + "'.<br>";
});
```


## Artículos

- [Cambios en WebStorage](https://lineadecodigo.com/html5/cambios-en-webstorage/)
