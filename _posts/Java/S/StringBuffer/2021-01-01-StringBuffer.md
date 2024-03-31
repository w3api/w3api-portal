---
title: StringBuffer
permalink: /Java/StringBuffer/
excerpt: "La clase StringBuffer es una clase mutable en Java que permite modificar cadenas eficientemente sin crear nuevos objetos."
date: 2024-03-08
last_modified_at: 2024-03-31
key: Java.S.StringBuffer
category: Java
tags: [clase java,java 1.0,java.lang,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


La clase `StringBuffer`  es una clase mutable que permite modificar cadenas de texto de una manera eficiente. A diferencia de la clase [`String`](https://www.w3api.com/Java/String/), `StringBuffer` no crea un nuevo objeto cada vez que se modifica una cadena, lo que la hace especialmente útil para operaciones de cadena que implican modificar el contenido de la cadena.


## Sintaxis


```java
public final class StringBuffer extends Object implements Serializable, CharSequence
```


## Constructores

- [StringBuffer()](https://www.w3api.com/Java/StringBuffer/StringBuffer/)

## Métodos

- [append()](https://www.w3api.com/Java/StringBuffer/append/)
- [appendCodePoint()](https://www.w3api.com/Java/StringBuffer/appendCodePoint/)
- [capacity()](https://www.w3api.com/Java/StringBuffer/capacity/)
- [charAt()](https://www.w3api.com/Java/StringBuffer/charAt/)
- [chars()](https://www.w3api.com/Java/StringBuffer/chars/)
- [codePointAt()](https://www.w3api.com/Java/StringBuffer/codePointAt/)
- [codePointBefore()](https://www.w3api.com/Java/StringBuffer/codePointBefore/)
- [codePointCount()](https://www.w3api.com/Java/StringBuffer/codePointCount/)
- [codePoints()](https://www.w3api.com/Java/StringBuffer/codePoints/)
- [delete()](https://www.w3api.com/Java/StringBuffer/delete/)
- [deleteCharAt()](https://www.w3api.com/Java/StringBuffer/deleteCharAt/)
- [ensureCapacity()](https://www.w3api.com/Java/StringBuffer/ensureCapacity/)
- [getChars()](https://www.w3api.com/Java/StringBuffer/getChars/)
- [indexOf()](https://www.w3api.com/Java/StringBuffer/indexOf/)
- [insert()](https://www.w3api.com/Java/StringBuffer/insert/)
- [lastIndexOf()](https://www.w3api.com/Java/StringBuffer/lastIndexOf/)
- [length()](https://www.w3api.com/Java/StringBuffer/length/)
- [offsetByCodePoints()](https://www.w3api.com/Java/StringBuffer/offsetByCodePoints/)
- [replace()](https://www.w3api.com/Java/StringBuffer/replace/)
- [reverse()](https://www.w3api.com/Java/StringBuffer/reverse/)
- [setCharAt()](https://www.w3api.com/Java/StringBuffer/setCharAt/)
- [setLength()](https://www.w3api.com/Java/StringBuffer/setLength/)
- [subSequence()](https://www.w3api.com/Java/StringBuffer/subSequence/)
- [substring()](https://www.w3api.com/Java/StringBuffer/substring/)
- [toString()](https://www.w3api.com/Java/StringBuffer/toString/)
- [trimToSize()](https://www.w3api.com/Java/StringBuffer/trimToSize/)

## Ejemplo


```java
public class InvertirCadenaConReverse {

	public static void main(String[] args) {
		String sCadena= "abuelita, abuelita";
		StringBuilder builder=new StringBuilder(sCadena);
		String sCadenaInvertida=builder.reverse().toString();		
		System.out.println(sCadenaInvertida);
	}

}
```


## Artículos

- [Invertir una cadena con reverse en Java](http://lineadecodigo.com/Java/invertir-una-cadena-con-reverse-en-java/)
- [Palíndromos en java con reverse](http://lineadecodigo.com/java/palindromos-en-java-con-reverse/)
- [Convertir un array en un string con java](http://lineadecodigo.com/java/convertir-un-array-en-un-string-con-java/)
