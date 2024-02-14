---
title: justify-content
permalink: /CSS/justify-content/
excerpt: "La propiedad justify-content en CSS se utiliza para alinear elementos flexibles horizontalmente en su contenedor, controlando el espacio y la alineación."
date: 2024-02-13
last_modified_at: 2024-02-14
key: CSS.j.justify-content
category: CSS
tags: [propiedad css,css 3]
image: "/assets/images/css.png"
sidebar:
  nav: css
---

## Descripción


La propiedad `justify-content` en [CSS](https://www.manualweb.net/css/) se utiliza para alinear elementos flexibles horizontalmente en su contenedor, de acuerdo con la dirección del eje principal. Puede controlar el espacio entre los elementos y su alineación dentro del contenedor.


## Sintaxis


La sintaxis para la propiedad CSS `justify-content` es la siguiente:


```css
justify-content : normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]
```


## Valores


Los diferentes valores que esta propiedad puede tener, cada uno con su funcionalidad y características únicas, son:


### **content-distribution**


Este valor es una opción versátil que permite una distribución equitativa del contenido a lo largo del eje principal, proporcionando diferentes opciones para manejar el espacio entre los elementos.

- `space-between`: Distribuye el espacio de manera uniforme entre los elementos, colocando el primer elemento al inicio y el último al final.
- `space-around`: Distribuye el espacio de manera uniforme alrededor de cada elemento.
- `space-evenly`: Distribuye el espacio de manera equitativa entre, antes y después de cada elemento.
- `stretch`: Estira los elementos para ocupar todo el espacio disponible.

### **normal**


Este valor es el predeterminado. Cuando se aplica, los items se ubican hacia el inicio del eje de reparto, alineándose de una manera estándar y ordenada.


### **content-position**


Este valor es una herramienta esencial para controlar el alineamiento del contenido a lo largo del eje principal, proporcionando una gran flexibilidad en el diseño.

- `center`: Centra el contenido a lo largo del eje.
- `start`: Alinea el contenido al inicio del eje.
- `end`: Alinea el contenido al final del eje.
- `flex-start`: Alinea el contenido al inicio del contenedor flexible.
- `flex-end`: Alinea el contenido al final del contenedor flexible.

### **overflow-position**


Este valor es crucial cuando se trata de controlar la posición del contenido en situaciones donde hay un desbordamiento, permitiendo mantener el diseño visualmente atractivo y funcional.

- `unsafe`: Permite que el contenido se desborde de su contenedor.
- `safe`: Evita que el contenido se desborde de su contenedor.

### **left**


Este valor se utiliza para alinear el contenido a la izquierda, proporcionando una disposición visual uniforme y consistente.


### **right**


Este valor se utiliza para alinear el contenido a la derecha, creando un diseño visual atractivo y consistente.


## Ejemplo


Aquí hay un ejemplo de cómo utilizar la propiedad `justify-content`:


```css
.container {
  display: flex;
  justify-content: space-between;
}
```


## Artículos

- [Tres columnas en CSS con Flexbox](https://lineadecodigo.com/css/tres-columnas-en-css-con-flexbox/)
