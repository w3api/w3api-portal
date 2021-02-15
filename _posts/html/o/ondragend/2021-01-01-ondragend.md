---
title: ondragend
permalink: /html/ondragend/
date: 2021-02-15 01:07:21.565191
key: HTML.o.ondragend
category: html
tags: ['evento html']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.o.ondragend.description }}

## Sintaxis
~~~html
~~~

## Ejemplo
~~~java
{{ site.data.HTML.o.ondragend.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.o.ondragend.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
