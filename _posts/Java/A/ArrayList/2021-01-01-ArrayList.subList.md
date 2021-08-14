---
title: ArrayList.subList()
permalink: /Java/ArrayList/subList/
date: 2021-08-14 11:43:10.909356 +0200
key: Java.A.ArrayList
category: Java
tags: ['java se', 'java.util', 'java.base', 'metodo java', 'Java 1.2']
sidebar: 
  nav: java
---

{% include w3api/datos.html clase=site.data.Java.A.ArrayList.metodos valor="subList" %}

## Descripción
{{_dato.description }}

## Sintaxis
~~~java
public List<E> subList(int fromIndex, int toIndex)
~~~

## Parámetros
* **int fromIndex**,  {% include w3api/param_description.html metodo=_dato parametro="int fromIndex" %}
* **int toIndex**,  {% include w3api/param_description.html metodo=_dato parametro="int toIndex" %}

## Excepciones
[IndexOutOfBoundsException](/Java/IndexOutOfBoundsException/), [IllegalArgumentException](/Java/IllegalArgumentException/)

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
