---
title: WheelEvent.deltaZ
permalink: /WebAPI/WheelEvent/deltaZ/
excerpt: "La propiedad deltaZ mide el desplazamiento en el eje Z en eventos de rueda."
date: 2025-04-28
last_modified_at: 2025-05-05
key: WebAPI.W.WheelEvent.deltaZ
category: WebAPI
tags: [propiedad webapi,dom level 3]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


La propiedad `deltaZ` del evento [`WheelEvent`](https://www.w3api.com/WebAPI/WheelEvent/) nos proporciona la cantidad de desplazamiento que se ha producido en el eje Z cuando utilizamos un dispositivo de entrada con rueda. Este valor será positivo si el desplazamiento es hacia el usuario y negativo si es en dirección contraria.


El eje Z representa la profundidad en un espacio tridimensional. A diferencia de los ejes X e Y que representan el movimiento horizontal y vertical respectivamente, el eje Z representa el movimiento hacia adelante y hacia atrás en relación al usuario. Este tipo de movimiento es menos común en dispositivos de entrada estándar, pero es relevante en dispositivos especializados o en entornos 3D.


## Sintaxis


```javascript
WheelEvent.deltaZ
```


## Objeto Padre


[`WheelEvent`](https://www.w3api.com/WebAPI/WheelEvent/)


## Ejemplo


```javascript
// Manejador del evento wheel
element.addEventListener('wheel', (event) => {
  console.log('Desplazamiento en eje Z:', event.deltaZ);
});
```


## Artículos

- 
