---
title: WheelEvent.deltaY
permalink: /WebAPI/WheelEvent/deltaY/
excerpt: "La propiedad deltaY del WheelEvent indica el desplazamiento vertical de la rueda del ratón."
date: 2025-02-18
last_modified_at: 2025-02-20
key: WebAPI.W.WheelEvent.deltaY
category: WebAPI
tags: [propiedad webapi,dom level 3]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


La propiedad `deltaY` del interface [`WheelEvent`](https://www.w3api.com/WebAPI/WheelEvent/) nos proporciona la cantidad de desplazamiento vertical que se ha realizado con la rueda del ratón. El valor será positivo cuando el desplazamiento sea hacia abajo y negativo cuando sea hacia arriba. Esta propiedad es de solo lectura y nos devuelve un número de punto flotante.


Los valores de la propiedad `deltaY` son medidos en píxeles. Cuando más gire la rueda del ratón, mayor será el valor absoluto que nos devuelva la propiedad. El valor puede variar dependiendo del dispositivo y del sistema operativo utilizado.


## Sintaxis


```javascript
WheelEvent.deltaY
```


## Objeto Padre


[`WheelEvent`](https://www.w3api.com/WebAPI/WheelEvent/)


## Ejemplo


En el siguiente ejemplo podemos ver cómo podemos detectar el desplazamiento vertical de la rueda del ratón y mostrar el valor en la consola.


```javascript
// Añadimos un listener para el evento wheel
document.addEventListener('wheel', (event) => {
  console.log('Desplazamiento vertical:', event.deltaY);
  
  if (event.deltaY > 0) {
    console.log('Desplazamiento hacia abajo');
  } else {
    console.log('Desplazamiento hacia arriba');
  }
});
```


## Artículos

- [Zoom en imágenes con en ratón en HTML5](https://lineadecodigo.com/html5/zoom-en-imagenes-con-el-raton-en-html5/)
