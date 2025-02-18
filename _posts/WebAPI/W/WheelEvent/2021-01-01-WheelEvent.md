---
title: WheelEvent
permalink: /WebAPI/WheelEvent/
excerpt: "La página describe el evento WheelEvent y su uso en la interacción con el mouse."
date: 2025-02-18
last_modified_at: 2025-02-18
key: WebAPI.W.WheelEvent
category: WebAPI
tags: [interface webapi,dom level 3]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


El interface `WheelEvent` representa un evento DOM que ocurre cuando el usuario utiliza la rueda del ratón. Este evento proporciona información detallada sobre el movimiento de la rueda, incluyendo la dirección y la magnitud del desplazamiento en los ejes X, Y y Z.


## Sintaxis


```javascript
WheelEvent
```


## Constructores

- [WheelEvent()](https://www.w3api.com/WebAPI/WheelEvent/WheelEvent/)

## Propiedades

- [deltaX](https://www.w3api.com/WebAPI/WheelEvent/deltaX/)
- [deltaY](https://www.w3api.com/WebAPI/WheelEvent/deltaY/)
- [deltaZ](https://www.w3api.com/WebAPI/WheelEvent/deltaZ/)
- [deltaMode](https://www.w3api.com/WebAPI/WheelEvent/deltaMode/)
- [wheelDelta](https://www.w3api.com/WebAPI/WheelEvent/wheelDelta/)
- [wheelDeltaX](https://www.w3api.com/WebAPI/WheelEvent/wheelDeltaX/)
- [wheelDeltaY](https://www.w3api.com/WebAPI/WheelEvent/wheelDeltaY/)

## Ejemplo


A continuación se muestra un ejemplo de cómo podemos utilizar el evento `WheelEvent` para detectar y responder al movimiento de la rueda del ratón:


```javascript
// Añadir un listener para el evento wheel
document.addEventListener('wheel', (event) => {
  console.log('Desplazamiento vertical:', event.deltaY);
  console.log('Desplazamiento horizontal:', event.deltaX);
  
  // Prevenir el comportamiento predeterminado si es necesario
   event.preventDefault();
});
```


## Artículos

- 
