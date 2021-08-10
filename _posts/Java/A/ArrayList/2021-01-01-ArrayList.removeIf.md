---
title: ArrayList.removeIf()
permalink: /Java/ArrayList/removeIf/
date: 2021-08-11 01:29:12.090130 +0200
key: Java.A.ArrayList
category: Java
tags: ['java se', 'java.util', 'java.base', 'metodo java', 'Java 1.2']
sidebar: 
  nav: java
---

{% include w3api/datos.html clase=site.data.Java.A.ArrayList.metodos valor="removeIf" %}

## Descripción
{{_dato.description }}

## Sintaxis
~~~java
public boolean removeIf(Predicate<? super E> filter)
~~~

## Parámetros
* **Predicate&lt;? super E&gt; filter**,  {% include w3api/param_description.html metodo=_dato parametro="Predicate<? super E> filter" %}

## Excepciones
[NullPointerException](/Java/NullPointerException/)

## Clase Padre
[ArrayList](/Java/ArrayList/)

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
