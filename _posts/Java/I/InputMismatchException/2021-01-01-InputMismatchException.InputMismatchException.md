---
title: InputMismatchException.InputMismatchException()
permalink: /Java/InputMismatchException/InputMismatchException/
excerpt: "El constructor InputMismatchException se utiliza para lanzar una excepción cuando la entrada tiene un formato incorrecto."
date: 2024-03-05
last_modified_at: 2024-03-29
key: Java.I.InputMismatchException.InputMismatchException
category: Java
tags: [metodo java,java 1.5,java.util,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


El constructor de [`InputMismatchException`](https://www.w3api.com/Java/InputMismatchException/) se utiliza para lanzar una excepción cuando se intenta leer una entrada que tiene un formato incorrecto para el tipo de datos esperado.


## Sintaxis


La clase [`InputMismatchException`](https://www.w3api.com/Java/InputMismatchException/) en [Java](https://www.manualweb.net/java/) tiene dos constructores definidos, presentados a continuación en formato de código [Java](https://www.manualweb.net/java/):


```java
public InputMismatchException()
public InputMismatchException(String s)
```


## Parámetros


En el segundo constructor de la clase [`InputMismatchException`](https://www.w3api.com/Java/InputMismatchException/), se considera un único parámetro:

- **String s,** - Este parámetro es una cadena de texto, que se utiliza para establecer el mensaje de error que se mostrará cuando se produzca la excepción de incompatibilidad de entrada.

## Clase Padre


[`InputMismatchException`](https://www.w3api.com/Java/InputMismatchException/)


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
