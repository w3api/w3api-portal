---
title: NullPointerException
permalink: /Java/NullPointerException/
excerpt: "La NullPointerException es una excepción en Java que ocurre cuando se intenta acceder a un objeto nulo."
date: 2024-03-06
last_modified_at: 2024-03-29
key: Java.N.NullPointerException
category: Java
tags: [clase java,java 1.0,java.lang,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


La excepción `NullPointerException` se genera cuando un programa intenta acceder a un método o propiedad de un objeto que es nulo. En otras palabras, cuando intentamos realizar una operación sobre un objeto que no existe, [Java](https://www.manualweb.net/java/) lanza esta excepción.


Esto puede suceder cuando se hace una referencia a un objeto sin inicializarlo, cuando se intenta acceder a un objeto que ya se ha liberado de memoria o cuando un método devuelve `null` y se intenta utilizar el valor retornado como si fuera un objeto.


## Sintaxis


```java
public class NullPointerException extends RuntimeException
```


## Constructores

- [NullPointerException()](https://www.w3api.com/Java/NullPointerException/NullPointerException/)

## Ejemplo


```java
public class Main {
    public static void main(String[] args) {
        String str = null;
        System.out.println(str.length());
    }
}
```


En este caso, `str` es `null`, por lo que cuando intentamos acceder a su método `length()`, se lanza una `NullPointerException`.


## Artículos

- 
