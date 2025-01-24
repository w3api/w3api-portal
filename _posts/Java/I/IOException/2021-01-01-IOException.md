---
title: IOException
permalink: /Java/IOException/
excerpt: "La IOException indica un error en la entrada salida y debe ser manejada."
date: 2024-03-04
last_modified_at: 2025-01-24
key: Java.I.IOException
category: Java
tags: [clase java,java 1.0,java.io,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


Cuando se produce una excepción `IOException` significa que se ha producido un error en la entrada/salida. Por ejemplo, cuando estamos leyendo de la consola, un fichero,... etc.


Es obligatorio tratar la excepción, ya sea en la cabeza del método mediante una sentencia `throws` o con un bloque `try-catch`.


La clase `IOException` es una **excepción verificada** (checked exception), lo que significa que el compilador obliga a manejarla explícitamente. Esta excepción es la clase base para excepciones producidas por operaciones fallidas de E/S, como [`FileNotFoundException`](https://www.w3api.com/Java/FileNotFoundException/) o [`SocketException`](https://www.w3api.com/Java/SocketException/).


## Sintaxis


```java
public class IOException extends Exception
```


## Constructores

- [IOException()](https://www.w3api.com/Java/IOException/IOException/)

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
- [Vaciar el contenido de un fichero mediante borrado y creación](http://lineadecodigo.com/Java/vaciar-el-contenido-de-un-fichero-mediante-borrado-y-creacion/)
- [Copiar un fichero con Java](http://lineadecodigo.com/Java/copiar-un-fichero-con-java/)
- [Guardar unos Properties con Java](http://lineadecodigo.com/Java/guardar-unos-properties-con-java/)
- [Crear un fichero en Java](https://lineadecodigo.com/java/crear-un-fichero-en-java/)
