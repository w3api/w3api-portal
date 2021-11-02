---
title: text-overflow
permalink: /CSS/text-overflow/
date: 2021-03-07 03:12:29.245194
key: CSS.t.text-overflow
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.t.text-overflow.description }}

## Sintaxis
~~~css
text-overflow : clip | ellipsis
~~~

## Valores
* **ellipsis**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-overflow valor="ellipsis" %}
* **clip**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-overflow valor="clip" %}

## Ejemplo
~~~css
{{ site.data.CSS.t.text-overflow.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.t.text-overflow.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
