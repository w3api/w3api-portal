---
title: BufferedReader.readLine()
permalink: /Java/BufferedReader/readLine/
excerpt: "El método readLine de BufferedReader lee una línea de texto y maneja excepciones."
date: 2024-02-25
last_modified_at: 2025-02-09
key: Java.B.BufferedReader.readLine
category: Java
tags: [metodo java,java 1.1,java.io,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


El método `readLine()` del objeto [`BufferedReader`](https://www.w3api.com/Java/BufferedReader/) lee una línea de texto hasta que encuentra un carácter de salto de línea (\n) y retorno de carro (\r).


El método retorna un [`String`](https://www.w3api.com/Java/String/) con el contenido de la línea leída o `null` si se ha llegado al final del stream. Los caracteres de salto de línea y retorno de carro son descartados del [`String`](https://www.w3api.com/Java/String/) retornado.


Se lanzará una excepción [`IOException`](https://www.w3api.com/Java/IOException/) cuando el stream subyacente se cierra o si ocurre algún error de I/O durante la lectura.


## Sintaxis


```java
public String readLine() throws IOException
```


## Excepciones


[`IOException`](https://www.w3api.com/Java/IOException/)


## Clase Padre


[`BufferedReader`](https://www.w3api.com/Java/BufferedReader/)


## Ejemplo


```java
BufferedReader br;
br = new BufferedReader(new InputStreamReader(System.in));
String texto;

try{ 
 br.readLine());
} catch (IOException ioe){ 
 ioe.printStackTrace();
}
```


## Artículos

- [Comparar el contenido de dos ficheros con Java](http://lineadecodigo.com/Java/comparar-el-contenido-de-dos-ficheros-con-java/)
- [Multiplicar dos números con Java](https://lineadecodigo.com/java/multiplicar-dos-numeros-con-java/)
