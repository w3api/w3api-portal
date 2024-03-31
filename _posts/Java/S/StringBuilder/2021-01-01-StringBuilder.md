---
title: StringBuilder
permalink: /Java/StringBuilder/
excerpt: "La clase StringBuilder permite manipular cadenas de caracteres de forma eficiente en Java."
date: 2024-03-08
last_modified_at: 2024-03-31
key: Java.S.StringBuilder
category: Java
tags: [clase java,java 1.5,java.lang,java.base]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


La clase `StringBuilder` permite manipular cadenas de caracteres de forma eficiente, evitando la creación de nuevas instancias de cadena cada vez que se modifican. Esto se realiza a través de la manipulación directa de una matriz de caracteres, lo que permite operaciones de cadena más rápidas y menos costosas en términos de rendimiento.


## Sintaxis


```java
public final class StringBuilder extends Object implements Serializable, CharSequence
```


## Constructores

- [StringBuilder()](https://www.w3api.com/Java/StringBuilder/StringBuilder/)

## Métodos

- [append()](https://www.w3api.com/Java/StringBuilder/append/)
- [appendCodePoint()](https://www.w3api.com/Java/StringBuilder/appendCodePoint/)
- [capacity()](https://www.w3api.com/Java/StringBuilder/capacity/)
- [charAt()](https://www.w3api.com/Java/StringBuilder/charAt/)
- [chars()](https://www.w3api.com/Java/StringBuilder/chars/)
- [codePointAt()](https://www.w3api.com/Java/StringBuilder/codePointAt/)
- [codePointBefore()](https://www.w3api.com/Java/StringBuilder/codePointBefore/)
- [codePointCount()](https://www.w3api.com/Java/StringBuilder/codePointCount/)
- [codePoints()](https://www.w3api.com/Java/StringBuilder/codePoints/)
- [delete()](https://www.w3api.com/Java/StringBuilder/delete/)
- [deleteCharAt()](https://www.w3api.com/Java/StringBuilder/deleteCharAt/)
- [ensureCapacity()](https://www.w3api.com/Java/StringBuilder/ensureCapacity/)
- [getChars()](https://www.w3api.com/Java/StringBuilder/getChars/)
- [indexOf()](https://www.w3api.com/Java/StringBuilder/indexOf/)
- [insert()](https://www.w3api.com/Java/StringBuilder/insert/)
- [lastIndexOf()](https://www.w3api.com/Java/StringBuilder/lastIndexOf/)
- [length()](https://www.w3api.com/Java/StringBuilder/length/)
- [offsetByCodePoints()](https://www.w3api.com/Java/StringBuilder/offsetByCodePoints/)
- [replace()](https://www.w3api.com/Java/StringBuilder/replace/)
- [reverse()](https://www.w3api.com/Java/StringBuilder/reverse/)
- [setCharAt()](https://www.w3api.com/Java/StringBuilder/setCharAt/)
- [setLength()](https://www.w3api.com/Java/StringBuilder/setLength/)
- [subSequence()](https://www.w3api.com/Java/StringBuilder/subSequence/)
- [substring()](https://www.w3api.com/Java/StringBuilder/substring/)
- [toString()](https://www.w3api.com/Java/StringBuilder/toString/)
- [trimToSize()](https://www.w3api.com/Java/StringBuilder/trimToSize/)

## Ejemplo


```java
public class CadenaMayusMinuscAlternativos {

	public static void main(String[] args) {
		
		StringBuilder sCadena = new StringBuilder("Esto es una frase muy interesante");
		String caracter;
		System.out.println(sCadena);
		
		for (int x=0;x<sCadena.length();x++) {
			caracter = Character.toString(sCadena.charAt(x));
			if (x%2 == 0)
				sCadena.setCharAt(x,caracter.toUpperCase().charAt(0));
			else
				sCadena.setCharAt(x,caracter.toLowerCase().charAt(0));
				
		}
		
		System.out.println(sCadena);

	}

}
```


## Artículos

- [Generar ips con java](http://lineadecodigo.com/java/generar-ips-con-java/)
- [Palabra mayusculas y minúsculas](http://lineadecodigo.com/java/palabra-mayusculas-minusculas/)
- [Invertir una cadena con reverse en java](http://lineadecodigo.com/java/invertir-una-cadena-con-reverse-en-java/)
- [Pila de caracteres](http://lineadecodigo.com/java/pila-de-caracteres/)
