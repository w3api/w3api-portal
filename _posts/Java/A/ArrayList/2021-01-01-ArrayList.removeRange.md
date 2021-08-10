---
title: ArrayList.removeRange()
permalink: /Java/ArrayList/removeRange/
date: 2021-08-11 01:46:10.637710 +0200
key: Java.A.ArrayList
category: Java
tags: ['java se', 'java.util', 'java.base', 'metodo java', 'Java 1.2']
sidebar: 
  nav: java
---

{% include w3api/datos.html clase=site.data.Java.A.ArrayList.metodos valor="removeRange" %}

## Descripción
{{_dato.description }}

## Sintaxis
~~~java
protected void removeRange(int fromIndex, int toIndex)
~~~

## Parámetros
* **int fromIndex**,  {% include w3api/param_description.html metodo=_dato parametro="int fromIndex" %}
* **int toIndex**,  {% include w3api/param_description.html metodo=_dato parametro="int toIndex" %}

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
