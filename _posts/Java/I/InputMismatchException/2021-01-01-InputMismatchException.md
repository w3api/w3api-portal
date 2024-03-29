---
title: InputMismatchException
permalink: /Java/InputMismatchException/
excerpt: "La excepción InputMismatchException se produce cuando los datos introducidos no coinciden con el tipo esperado por el programa."
date: 2024-03-05
last_modified_at: 2024-03-29
key: Java.I.InputMismatchException
category: Java
tags: [clase java,java 1.5,java.util,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


La excepción `InputMismatchException` se produce cuando el tipo de los datos introducidos por el usuario no coincide con el tipo esperado por el programa. Por ejemplo, si el programa espera un número entero y el usuario introduce una cadena de texto, se lanzará una `InputMismatchException`.


## Sintaxis


```java
public class InputMismatchException extends NoSuchElementException
```


## Constructores

- [InputMismatchException()](https://www.w3api.com/Java/InputMismatchException/InputMismatchException/)

## Ejemplo


```java
List<Integer> lista = new ArrayList<Integer>();
Scanner reader = new Scanner(System.in);
System.out.println("Introduce números. El cero para salir");			

int numero = 0;
do {
  try {
    numero = reader.nextInt();
    lista.add(numero);
  } catch (InputMismatchException ime){
    System.out.println("¡Cuidado! Solo puedes insertar números. ");
    reader.next();
  }			
} while (numero!=0);
```


## Artículos

- [Leer números por teclado con Java](https://lineadecodigo.com/java/leer-numeros-por-teclado-con-java/)
