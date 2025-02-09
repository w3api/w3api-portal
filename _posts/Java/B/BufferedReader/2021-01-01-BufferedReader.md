---
title: BufferedReader
permalink: /Java/BufferedReader/
excerpt: "La clase BufferedReader permite leer texto de un InputStream de manera eficiente."
date: 2024-02-25
last_modified_at: 2025-02-09
key: Java.B.BufferedReader
category: Java
tags: [clase java,java 1.1,java.io,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


La clase `BufferedReader` nos permite leer texto de un [`InputStream`](https://www.w3api.com/Java/InputStream/) de una forma sencilla. Permite leer caracteres, arrays y líneas.


La clase `BufferedReader` utiliza un buffer interno para almacenar los datos leídos, lo que mejora significativamente el rendimiento de las operaciones de lectura. Este buffer reduce el número de llamadas al sistema operativo para leer datos, ya que almacena en memoria una porción más grande de información. Además, proporciona métodos convenientes como [`readLine()`](https://www.w3api.com/Java/BufferedReader/readLine/) que facilitan la lectura de texto línea por línea.


## Sintaxis


```java
public class BufferedReader extends Reader
```


## Constructores

- [BufferedReader()](https://www.w3api.com/Java/BufferedReader/BufferedReader/)

## Métodos

- [lines()](https://www.w3api.com/Java/BufferedReader/lines/)
- [mark()](https://www.w3api.com/Java/BufferedReader/mark/)
- [markSupported()](https://www.w3api.com/Java/BufferedReader/markSupported/)
- [read()](https://www.w3api.com/Java/BufferedReader/read/)
- [readLine()](https://www.w3api.com/Java/BufferedReader/readLine/)
- [ready()](https://www.w3api.com/Java/BufferedReader/ready/)
- [reset()](https://www.w3api.com/Java/BufferedReader/reset/)
- [skip()](https://www.w3api.com/Java/BufferedReader/skip/)

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
- [Conversor de monedas](http://lineadecodigo.com/Java/conversor-de-monedas/)
- [Multiplicar dos números con Java](https://lineadecodigo.com/java/multiplicar-dos-numeros-con-java/)
