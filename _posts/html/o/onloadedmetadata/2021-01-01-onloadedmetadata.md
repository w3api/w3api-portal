---
title: onloadedmetadata
permalink: /HTML/onloadedmetadata/
date: 2021-02-15 01:07:21.568123
key: HTML.o.onloadedmetadata
category: HTML
tags: ['evento html']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.o.onloadedmetadata.description }}

## Sintaxis
~~~html
~~~

## Ejemplo
~~~java
{{ site.data.HTML.o.onloadedmetadata.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.o.onloadedmetadata.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
