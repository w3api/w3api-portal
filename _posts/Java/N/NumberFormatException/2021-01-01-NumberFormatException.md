---
title: NumberFormatException
permalink: /Java/NumberFormatException/
excerpt: "La excepción NumberFormatException se lanza al intentar convertir una cadena a un tipo numérico con formato incorrecto."
date: 2024-03-06
last_modified_at: 2024-03-29
key: Java.N.NumberFormatException
category: Java
tags: [clase java,java 1.0,java.lang,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


La excepción `NumberFormatException` se lanza para indicar que la aplicación ha intentado convertir una cadena a uno de los tipos numéricos, pero que la cadena no tiene el formato adecuado.


Situaciones donde necesitamos convertir una cadena a un tipo numérico como [`int`](https://manualweb.net/java/tipos-datos-primitivos-java/#int), [`float`](https://manualweb.net/java/tipos-datos-primitivos-java/#float) o [`double`](https://manualweb.net/java/tipos-datos-primitivos-java/#double). Esto puede ocurrir, por ejemplo, cuando estamos leyendo datos de un archivo o de una entrada de usuario y esperamos un número, pero la cadena proporcionada no es numérica o está mal formateada.


## Sintaxis


```java
public class NumberFormatException extends IllegalArgumentException
```


## Constructores

- [NumberFormatException()](https://www.w3api.com/Java/NumberFormatException/NumberFormatException/)

## Ejemplo


```java
try {
 String cadena = "1243e";
 Integer.parseInt(cadena);
} catch (NumberFormatException nfe){
  nfe.printStackTrace();
}
```


## Artículos

- [Tablas de multiplicar en Java](http://lineadecodigo.com/java/tablas-de-multiplicar-en-java/)
