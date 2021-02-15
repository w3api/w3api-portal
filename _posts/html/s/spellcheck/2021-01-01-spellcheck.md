---
title: spellcheck
permalink: /html/spellcheck/
date: 2021-02-15 01:07:21.550015
key: HTML.s.spellcheck
category: html
tags: ['atributo html']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.s.spellcheck.description }}

## Sintaxis
~~~html
~~~

## Ejemplo
~~~java
{{ site.data.HTML.s.spellcheck.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.s.spellcheck.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
