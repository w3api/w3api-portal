---
title: WheelEvent.wheelDeltaY
permalink: /WebAPI/WheelEvent/wheelDeltaY/
excerpt: "La propiedad wheelDeltaY indica el desplazamiento vertical del ratón en píxeles."
date: 2025-04-28
last_modified_at: 2025-05-05
key: WebAPI.W.WheelEvent.wheelDeltaY
category: WebAPI
tags: [propiedad webapi,obsoleto]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


La propiedad `wheelDeltaY` del evento [`WheelEvent`](https://www.w3api.com/WebAPI/WheelEvent/) es una propiedad que nos devuelve la cantidad de píxeles que el usuario ha desplazado verticalmente mediante la rueda del ratón. Esta propiedad es de solo lectura y nos devuelve un valor numérico. Es importante tener en cuenta que esta propiedad está obsoleta y se recomienda utilizar la propiedad [`deltaY`](https://www.w3api.com/WebAPI/WheelEvent/deltaY/) en su lugar.


Fue generada por [Internet Explorer](https://www.ayudaenlaweb.com/navegadores/que-es-internet-explorer/) y nunca llegó a ser parte de un estándar.


## Sintaxis


```javascript
WheelEvent.wheelDeltaY
```


## Objeto Padre


[`WheelEvent`](https://www.w3api.com/WebAPI/WheelEvent/)


## Ejemplo


```javascript
document.addEventListener('wheel', (event) => {
  console.log(`Desplazamiento vertical: ${event.wheelDeltaY}`);
});
```


## Artículos

- 
