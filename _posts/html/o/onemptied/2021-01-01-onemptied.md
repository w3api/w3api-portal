---
title: onemptied
permalink: /HTML/onemptied/
date: 2021-02-15 01:07:21.566406
key: HTML.o.onemptied
category: HTML
tags: ['evento html']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.o.onemptied.description }}

## Sintaxis
~~~html
~~~

## Ejemplo
~~~java
{{ site.data.HTML.o.onemptied.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.o.onemptied.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
