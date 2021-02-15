---
title: ontimeupdate
permalink: /html/ontimeupdate/
date: 2021-02-15 01:07:21.572448
key: HTML.o.ontimeupdate
category: html
tags: ['evento html']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.o.ontimeupdate.description }}

## Sintaxis
~~~html
~~~

## Ejemplo
~~~java
{{ site.data.HTML.o.ontimeupdate.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.o.ontimeupdate.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
