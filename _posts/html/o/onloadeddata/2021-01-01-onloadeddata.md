---
title: onloadeddata
permalink: /html/onloadeddata/
date: 2021-02-15 01:07:21.567983
key: HTML.o.onloadeddata
category: html
tags: ['evento html']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.o.onloadeddata.description }}

## Sintaxis
~~~html
~~~

## Ejemplo
~~~java
{{ site.data.HTML.o.onloadeddata.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.o.onloadeddata.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
