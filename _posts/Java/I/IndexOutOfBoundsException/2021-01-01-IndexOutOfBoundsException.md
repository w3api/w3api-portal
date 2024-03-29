---
title: IndexOutOfBoundsException
permalink: /Java/IndexOutOfBoundsException/
excerpt: "IndexOutOfBoundsException es una excepción en Java que indica un índice fuera de rango."
date: 2024-03-05
last_modified_at: 2024-03-29
key: Java.I.IndexOutOfBoundsException
category: Java
tags: [clase java,java 1.0,java.lang,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


La excepción `IndexOutOfBoundsException` se lanza para indicar que un índice de algún tipo (como el índice de un array, una cadena, una lista o un vector) está fuera de rango. Los programadores pueden utilizar esta excepción para detectar y manejar errores de índice en su código.


## Sintaxis


```java
public class IndexOutOfBoundsException extends RuntimeException
```


## Constructores

- [IndexOutOfBoundsException()](https://www.w3api.com/Java/IndexOutOfBoundsException/IndexOutOfBoundsException/)

## Ejemplo


```java
String cadena = new String("Mi cadena");
char caracter; 

try{ 
 caracter = cadena.charAt(40);
} catch (IndexOutOfBoundsException ioobe){ 
 System.out.println("No existe un carácter en esa posición");
}
```


## Artículos

- [Arrays dinámicos en Java](http://lineadecodigo.com/java/arrays-dinamicos-en-java/)
