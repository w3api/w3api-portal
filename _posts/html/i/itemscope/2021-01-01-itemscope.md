---
title: itemscope
permalink: /HTML/itemscope/
date: 2021-02-15 01:07:21.549313
key: HTML.i.itemscope
category: HTML
tags: ['atributo html']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.i.itemscope.description }}

## Sintaxis
~~~html
~~~

## Ejemplo
~~~java
{{ site.data.HTML.i.itemscope.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.i.itemscope.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
