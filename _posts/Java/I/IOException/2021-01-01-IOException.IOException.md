---
title: IOException.IOException()
permalink: /Java/IOException/IOException/
date: 2021-08-18 18:26:56.158696 +0200
key: Java.I.IOException
category: Java
tags: ['java se', 'java.io', 'java.base', 'metodo java', 'Java 1.0']
sidebar: 
  nav: java
---

{% include w3api/datos.html clase=site.data.Java.I.IOException.constructores valor="IOException" %}

## Descripción
{{_dato.description }}

## Sintaxis
~~~java
public IOException()
public IOException(String message)
public IOException(String message, Throwable cause)
public IOException(Throwable cause)
~~~

## Parámetros
* **Throwable cause**,  {% include w3api/param_description.html metodo=_dato parametro="Throwable cause" %}
* **String message**,  {% include w3api/param_description.html metodo=_dato parametro="String message" %}

## Clase Padre
[IOException](/Java/IOException/)

## Ejemplo
~~~java
{{ _dato.code}}
~~~

## Artículos
<ul>
{%- for _ldc in _dato.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
