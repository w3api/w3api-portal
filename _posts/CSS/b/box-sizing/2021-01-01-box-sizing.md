---
title: box-sizing
permalink: /CSS/box-sizing/
date: 2021-03-07 03:00:11.296638
key: CSS.b.box-sizing
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.b.box-sizing.description }}

## Sintaxis
~~~css
box-sizing : content-box | border-box
~~~

## Valores
* **border-box**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.box-sizing valor="border-box" %}
* **content-box**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.box-sizing valor="content-box" %}

## Ejemplo
~~~css
{{ site.data.CSS.b.box-sizing.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.b.box-sizing.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
