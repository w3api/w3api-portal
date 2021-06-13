---
title: translate
permalink: /HTML/translate/
date: 2021-02-15 01:07:21.550692
key: HTML.t.translate
category: HTML
tags: ['atributo html']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.t.translate.description }}

## Sintaxis
~~~html
~~~

## Ejemplo
~~~java
{{ site.data.HTML.t.translate.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.t.translate.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
