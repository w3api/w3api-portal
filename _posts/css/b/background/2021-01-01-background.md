---
title: background
permalink: /CSS/background/
date: 2021-03-07 02:57:47.558688
key: CSS.b.background
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.b.background.description }}

## Sintaxis
~~~css
background : [<bg-layer># ,]? <final-bg-layer>
~~~

## Valores
* **bg-layer**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.background valor="bg-layer" %}
* **final-bg-layer**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.background valor="final-bg-layer" %}

## Ejemplo
~~~css
{{ site.data.CSS.b.background.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.b.background.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
