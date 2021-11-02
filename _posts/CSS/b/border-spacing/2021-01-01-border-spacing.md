---
title: border-spacing
permalink: /CSS/border-spacing/
date: 2021-03-07 02:59:33.637381
key: CSS.b.border-spacing
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.b.border-spacing.description }}

## Sintaxis
~~~css
border-spacing : <length> <length>? | inherit
~~~

## Valores
* **length**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-spacing valor="length" %}
* **inherit**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-spacing valor="inherit" %}

## Ejemplo
~~~css
{{ site.data.CSS.b.border-spacing.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.b.border-spacing.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
