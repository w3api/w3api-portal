---
title: blockquote.cite
permalink: /HTML/blockquote/cite/
date: 2021-02-15 01:07:21.111279
key: HTML.b.blockquote.cite
category: HTML
tags: ['atributo html']
sidebar: 
  nav: html
---

{% include w3api/datos.html clase=site.data.HTML.b.blockquote.atributos valor="cite" %}

## Descripción
{{_dato.description }}

## Sintaxis
~~~html
~~~

## Elemento Padre
[blockquote](/HTML/blockquote/)

## Ejemplo
~~~java
{{ _dato.code}}
~~~

## Artículos
<ul>
{%- for _ldc in _dato.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
