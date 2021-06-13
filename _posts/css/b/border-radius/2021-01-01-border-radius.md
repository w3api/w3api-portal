---
title: border-radius
permalink: /CSS/border-radius/
date: 2021-03-07 02:59:14.945509
key: CSS.b.border-radius
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.b.border-radius.description }}

## Sintaxis
~~~css
border-radius : <length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?
~~~

## Valores
* **length-percentage**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-radius valor="length-percentage" %}

## Ejemplo
~~~css
{{ site.data.CSS.b.border-radius.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.b.border-radius.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
