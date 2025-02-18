---
title: MouseEvent
permalink: /WebAPI/MouseEvent/
excerpt: "El MouseEvent representa eventos del ratón y su interacción en la interfaz web."
date: 2025-02-18
last_modified_at: 2025-02-18
key: WebAPI.M.MouseEvent
category: WebAPI
tags: [interface webapi,dom level 2]
image: "/assets/images/webapi.png"
sidebar:
  nav: webapi
---

## Descripción


El interface `MouseEvent` representa un evento que ocurre cuando se interactúa con el ratón. Este interface extiende de UIEvent y proporciona información específica sobre la posición del ratón, el estado de los botones y las teclas modificadoras cuando se produce el evento.


## Sintaxis


```javascript
MouseEvent
```


## Constructores

- [MouseEvent()](https://www.w3api.com/WebAPI/MouseEvent/MouseEvent/)

## Propiedades

- [altKey](https://www.w3api.com/WebAPI/MouseEvent/altKey/)
- [button](https://www.w3api.com/WebAPI/MouseEvent/button/)
- [buttons](https://www.w3api.com/WebAPI/MouseEvent/buttons/)
- [clientX](https://www.w3api.com/WebAPI/MouseEvent/clientX/)
- [clientY](https://www.w3api.com/WebAPI/MouseEvent/clientY/)
- [ctrlKey](https://www.w3api.com/WebAPI/MouseEvent/ctrlKey/)
- [layerX](https://www.w3api.com/WebAPI/MouseEvent/layerX/)
- [layerY](https://www.w3api.com/WebAPI/MouseEvent/layerY/)
- [metaKey](https://www.w3api.com/WebAPI/MouseEvent/metaKey/)
- [movementX](https://www.w3api.com/WebAPI/MouseEvent/movementX/)
- [movementY](https://www.w3api.com/WebAPI/MouseEvent/movementY/)
- [offsetX](https://www.w3api.com/WebAPI/MouseEvent/offsetX/)
- [offsetY](https://www.w3api.com/WebAPI/MouseEvent/offsetY/)
- [pageX](https://www.w3api.com/WebAPI/MouseEvent/pageX/)
- [pageY](https://www.w3api.com/WebAPI/MouseEvent/pageY/)
- [relatedTarget](https://www.w3api.com/WebAPI/MouseEvent/relatedTarget/)
- [screenX](https://www.w3api.com/WebAPI/MouseEvent/screenX/)
- [screenY](https://www.w3api.com/WebAPI/MouseEvent/screenY/)
- [shiftKey](https://www.w3api.com/WebAPI/MouseEvent/shiftKey/)
- [mozInputSource](https://www.w3api.com/WebAPI/MouseEvent/mozInputSource/)
- [webkitForce](https://www.w3api.com/WebAPI/MouseEvent/webkitForce/)
- [x](https://www.w3api.com/WebAPI/MouseEvent/x/)
- [y](https://www.w3api.com/WebAPI/MouseEvent/y/)

## Métodos

- [getModifierState()](https://www.w3api.com/WebAPI/MouseEvent/getModifierState/)
- [initMouseEvent()](https://www.w3api.com/WebAPI/MouseEvent/initMouseEvent/)

## Ejemplo


A continuación se muestra un ejemplo de cómo manejar un evento de ratón utilizando el interface `MouseEvent`:


```javascript
document.addEventListener('click', (event) => {
  // Obtener las coordenadas del clic
  console.log(`Posición X: ${event.clientX}`);
  console.log(`Posición Y: ${event.clientY}`);
  
  // Comprobar si se ha pulsado alguna tecla modificadora
  if (event.ctrlKey) {
    console.log('Se ha pulsado la tecla Control');
  }
});
```


## Artículos

- 
