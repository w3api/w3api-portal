---
title: PrintStream.print()
permalink: /Java/PrintStream/print/
excerpt: "El método print() de la clase PrintStream imprime datos en diferentes formatos en la salida de la corriente."
date: 2024-03-06
last_modified_at: 2024-03-31
key: Java.P.PrintStream.print
category: Java
tags: [metodo java,java 1.0,java.io,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


El método `print()` de la clase [`PrintStream`](https://www.w3api.com/Java/PrintStream/) es un método sobrecargado que imprime datos de diversos tipos en la salida de la corriente. No añade ninguna línea nueva al final, por lo que después de imprimir los datos, la posición del cursor permanece en la misma línea.


## Sintaxis


```java
public void print(boolean b)
public void print(char c)
public void print(char[] s)
public void print(double d)
public void print(float f)
public void print(int i)
public void print(long l)
public void print(Object obj)
public void print(String s)

```


Estos métodos son utilizados para imprimir diferentes tipos de variables y objetos en la consola.


## Parámetros


Los parámetros que estos métodos pueden tomar son:

- **float f,** es usado cuando necesitamos imprimir un número con decimales.
- **long l,** es para imprimir un número entero largo.
- **String s,** se utiliza para imprimir cadenas de texto.
- **double d,** al igual que el float, se usa para imprimir números con decimales, pero con mayor precisión.
- **boolean b,** es usado para imprimir un valor booleano, que puede ser verdadero o falso.
- **char[] s,** se utiliza para imprimir un array de caracteres.
- **char c,** es para imprimir un solo carácter.
- **Object obj,** se utiliza para imprimir cualquier objeto en Java.
- **int i,** es utilizado para imprimir un número entero.

## Excepciones


[`NullPointerException`](https://www.w3api.com/Java/NullPointerException/)


## Clase Padre


[`PrintStream`](https://www.w3api.com/Java/PrintStream/)


## Ejemplo


```java
System.out.print("Mostrando texto por consola");
```


## Artículos

- [Transformar codigo binario a decimal](http://lineadecodigo.com/java/transformar-codigo-binario-a-decimal/)
- [Dibujando una figura](http://lineadecodigo.com/2007/05/06/dibujando-una-figura/)
- [Dibujar una figura con bucles](http://lineadecodigo.com/2009/04/23/dibujar-una-figura-con-bucles/)
- [Lectura de caracteres por consola en java](http://lineadecodigo.com/2007/04/06/lectura-de-caracteres-por-consola-en-java/)
- [Multiplo de un numero en java](http://lineadecodigo.com/java/multiplo-de-un-numero-en-java/)
- [Numeros primos en java](http://lineadecodigo.com/java/numeros-primos-en-java/)
- [Numeros primos rango java](http://lineadecodigo.com/java/numeros-primos-rango-java/)
- [Consulta jdbc sin conocer los campos](http://lineadecodigo.com/java/consulta-jdbc-sin-conocer-los-campos/)
- [Ejemplo BatchUpdateException](http://lineadecodigo.com/java/ejemplo-batchupdateexception/)
- [Jdbc SQLWarning](http://lineadecodigo.com/java/jdbc-sqlwarning/)
- [Calcular el sector circular en java](http://lineadecodigo.com/java/calcular-el-sector-circular-en-java/)
- [Invertir una frase en java](http://lineadecodigo.com/java/invertir-una-frase-en-java/)
- [Rellenar una matriz con una cadena en java](http://lineadecodigo.com/java/rellenar-una-matriz-con-una-cadena-en-java/)
- [Imprimir una matriz con java](http://lineadecodigo.com/java/imprimir-una-matriz-con-java/)
- [Java array matriz](http://lineadecodigo.com/tag/java-array-matriz/)
- [Matriz aleatoria en java](http://lineadecodigo.com/java/matriz-aleatoria-en-java/)
- [Matriz de cadenas en java](http://lineadecodigo.com/java/matriz-de-cadenas-en-java/)
- [Transponer una matriz en java](http://lineadecodigo.com/java/transponer-una-matriz-en-java/)
- [Restar matrices en java](http://lineadecodigo.com/java/restar-matrices-en-java/)
- [Rotar una matriz](http://lineadecodigo.com/java/rotar-una-matriz/)
- [Rotar matriz a la izquierda](http://lineadecodigo.com/java/rotar-matriz-a-la-izquierda/)
- [String stream java](http://lineadecodigo.com/java/string-stream-java/)
