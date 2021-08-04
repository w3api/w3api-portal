---
title: ArrayList.add()
permalink: /Java/ArrayList/add/
date: 2021-08-05 01:09:47.498055 +0200
key: Java.A.ArrayList
category: Java
tags: ['java se', 'java.util', 'java.base', 'metodo java', 'Java 1.2']
sidebar: 
  nav: java
---

{% include w3api/datos.html clase=site.data.Java.A.ArrayList.metodos valor="add" %}

## Descripción
{{_dato.description }}

## Sintaxis
~~~java
public void add(int index, E element)
public boolean add(E e)
~~~

## Parámetros
* **int index**,  {% include w3api/param_description.html metodo=_dato parametro="int index" %}
* **E e**,  {% include w3api/param_description.html metodo=_dato parametro="E e" %}
* **E element**,  {% include w3api/param_description.html metodo=_dato parametro="E element" %}

## Excepciones
[IndexOutOfBoundsException](/Java/IndexOutOfBoundsException/)

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
