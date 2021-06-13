---
title: border-image-slice
permalink: /CSS/border-image-slice/
date: 2021-03-07 02:58:54.456800
key: CSS.b.border-image-slice
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.b.border-image-slice.description }}

## Sintaxis
~~~css
border-image-slice : [<number [0,∞]> | <percentage [0,∞]>]{1,4} && fill?
~~~

## Valores
* **fill**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-image-slice valor="fill" %}
* **percentage**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-image-slice valor="percentage" %}
* **number**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-image-slice valor="number" %}

## Ejemplo
~~~css
{{ site.data.CSS.b.border-image-slice.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.b.border-image-slice.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
