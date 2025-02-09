---
title: InputStream
permalink: /Java/InputStream-java-io/
excerpt: "La clase InputStream permite leer flujos de entrada de bytes en Java."
date: 2025-02-09
last_modified_at: 2025-02-09
key: Java.I.InputStream-java-io
category: Java
tags: [clase java,java 1.0,java se,java.io,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## **Descripción**


La clase `InputSream` es una clase abstracta que proporciona un flujo de entrada de bytes. Es la clase base para todas las clases que representan un flujo de entrada de bytes en [Java](http://www.manualweb.net/java/). Define los métodos fundamentales para leer datos de una fuente, como archivos, sockets o arrays de bytes.


## **Sintaxis**


```java
public abstract class InputStream extends Object implements Closeable
```


## **Constructores**

- [InputStream()](https://w3api.com/Java/InputStream-java-io/InputStream/)

## **Métodos**

- [available()](https://w3api.com/Java/InputStream-java-io/available/)
- [close()](https://w3api.com/Java/InputStream-java-io/close/)
- [mark()](https://w3api.com/Java/InputStream-java-io/mark/)
- [markSupported()](https://w3api.com/Java/InputStream-java-io/markSupported/)
- [read()](https://w3api.com/Java/InputStream-java-io/read/)
- [readAllBytes()](https://w3api.com/Java/InputStream-java-io/readAllBytes/)
- [readNBytes()](https://w3api.com/Java/InputStream-java-io/readNBytes/)
- [reset()](https://w3api.com/Java/InputStream-java-io/reset/)
- [skip()](https://w3api.com/Java/InputStream-java-io/skip/)
- [transferTo()](https://w3api.com/Java/InputStream-java-io/transferTo/)

## **Ejemplo**


```java
// Copiar ficheros
File origen = new File("origen.txt");
File destino = new File("destino.txt");

try {
  InputStream in = new FileInputStream(origen);
  OutputStream out = new FileOutputStream(destino);
				
  byte[] buf = new byte[1024];
  int len;

  while ((len = in.read(buf)) > 0) {
    out.write(buf, 0, len);
  }
		
  in.close();
  out.close();
} catch (IOException ioe){
  ioe.printStackTrace();
}
```


## Artículos

- [Copiar un fichero con Java](http://lineadecodigo.com/Java/copiar-un-fichero-con-java/)
- [Multiplicar dos números con Java](https://lineadecodigo.com/java/multiplicar-dos-numeros-con-java/)
