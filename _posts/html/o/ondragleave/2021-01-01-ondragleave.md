---
title: ondragleave
permalink: /html/ondragleave/
date: 2021-02-15 01:07:21.565486
key: HTML.o.ondragleave
category: html
tags: ['evento html']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.o.ondragleave.description }}

## Sintaxis
~~~html
~~~

## Ejemplo
~~~java
{{ site.data.HTML.o.ondragleave.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.o.ondragleave.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
