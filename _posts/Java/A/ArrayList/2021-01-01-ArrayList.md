---
title: ArrayList
permalink: /Java/ArrayList/
date: 2021-08-05 01:09:17.682417 +0200
key: Java.A.ArrayList
category: Java
tags: ['java se', 'java.util', 'java.base', 'clase java', 'Java 1.2']
sidebar: 
  nav: java
---

## Descripción
{{site.data.Java.A.ArrayList.description }}

## Sintaxis
~~~java
public class ArrayList<E> extends AbstractList<E> implements List<E>, RandomAccess, Cloneable, Serializable
~~~

## Constructores
* [ArrayList()](/Java/ArrayList/ArrayList/)

## Métodos
* [add()](/Java/ArrayList/add)
* [addAll()](/Java/ArrayList/addAll)
* [clear()](/Java/ArrayList/clear)
* [clone()](/Java/ArrayList/clone)
* [contains()](/Java/ArrayList/contains)
* [ensureCapacity()](/Java/ArrayList/ensureCapacity)
* [forEach()](/Java/ArrayList/forEach)
* [get()](/Java/ArrayList/get)
* [indexOf()](/Java/ArrayList/indexOf)
* [isEmpty()](/Java/ArrayList/isEmpty)
* [iterator()](/Java/ArrayList/iterator)
* [lastIndexOf()](/Java/ArrayList/lastIndexOf)
* [listIterator()](/Java/ArrayList/listIterator)
* [remove()](/Java/ArrayList/remove)
* [removeAll()](/Java/ArrayList/removeAll)
* [removeIf()](/Java/ArrayList/removeIf)
* [removeRange()](/Java/ArrayList/removeRange)
* [retainAll()](/Java/ArrayList/retainAll)
* [set()](/Java/ArrayList/set)
* [size()](/Java/ArrayList/size)
* [spliterator()](/Java/ArrayList/spliterator)
* [subList()](/Java/ArrayList/subList)
* [toArray()](/Java/ArrayList/toArray)
* [trimToSize()](/Java/ArrayList/trimToSize)

## Ejemplo
~~~java
{{ site.data.Java.A.ArrayList.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.Java.A.ArrayList.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
