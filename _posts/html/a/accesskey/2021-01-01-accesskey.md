---
title: accesskey
permalink: /HTML/accesskey/
date: 2021-07-11 13:00:54.751383 +0200
key: HTML.a.accesskey
category: HTML
tags: ['atributo html', 'html 4.01', 'html 5', 'html 5.1', 'html 5.2']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.a.accesskey.description }}

## Sintaxis
~~~html
<elemento accesskey="caracter"/>
~~~

## Ejemplo
~~~java
{{ site.data.HTML.a.accesskey.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.a.accesskey.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
