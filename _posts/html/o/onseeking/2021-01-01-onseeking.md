---
title: onseeking
permalink: /HTML/onseeking/
date: 2021-02-15 01:07:21.571341
key: HTML.o.onseeking
category: HTML
tags: ['evento html']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.o.onseeking.description }}

## Sintaxis
~~~html
~~~

## Ejemplo
~~~java
{{ site.data.HTML.o.onseeking.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.o.onseeking.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
