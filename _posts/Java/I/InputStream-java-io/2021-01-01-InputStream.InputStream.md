---
title: InputStream.InputStream()
permalink: /Java/InputStream-java-io/InputStream/
excerpt: "El constructor de InputStream crea un objeto InputStream sin parámetros."
date: 2025-02-09
last_modified_at: 2025-02-09
key: Java.I.InputStream-java-io.InputStream
category: Java
tags: [constructor java,java 1.0,java se,java.io,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## **Descripción**


El constructor de la clase [`InputStream`](https://w3api.com/Java/InputStream-java-io/) es un constructor público que crea un nuevo objeto de tipo [`InputStream`](https://w3api.com/Java/InputStream-java-io/). Este constructor no recibe ningún parámetro y es la base para todas las clases que heredan de [`InputStream`](https://w3api.com/Java/InputStream-java-io/).


Lanzará una excepción [`IOException`](notion://www.notion.so/Java/IOException/) si se produce un error durante la operación de entrada/salida. Esta es una excepción común al trabajar con operaciones de E/S en [Java](https://www.manualweb.net/java/) y debe ser manejada adecuadamente en el código.


## **Sintaxis**


```java
public InputStream()
```


## Excepciones


[`IOException`](notion://www.notion.so/Java/IOException/)


## **Clase Padre**


[`InputStream`](https://w3api.com/Java/InputStream-java-io/)


## **Ejemplo**


En este ejemplo, vamos a crear un objeto [`InputStream`](https://w3api.com/Java/InputStream-java-io/) básico:


```java
// Crear un nuevo InputStream
InputStream input = new InputStream() {
    @Override
    public int read() throws IOException {
        return -1;
    }
};
```


En este caso, hemos creado una implementación anónima de InputStream ya que es una clase abstracta. El método [`read()`](https://w3api.com/Java/InputStream-java-io/read/) está sobrescrito para devolver -1, indicando el final del stream.


## Artículos

- [Multiplicar dos números con Java](https://lineadecodigo.com/java/multiplicar-dos-numeros-con-java/)
