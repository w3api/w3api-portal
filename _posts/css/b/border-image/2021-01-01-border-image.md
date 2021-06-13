---
title: border-image
permalink: /CSS/border-image/
date: 2021-03-07 02:58:45.814560
key: CSS.b.border-image
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.b.border-image.description }}

## Sintaxis
~~~css
border-image : <'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>
~~~

## Valores
* **border-image-outset**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-image valor="border-image-outset" %}
* **border-image-source**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-image valor="border-image-source" %}
* **border-image-width**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-image valor="border-image-width" %}
* **border-image-slice**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-image valor="border-image-slice" %}
* **border-image-repeat**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.border-image valor="border-image-repeat" %}

## Ejemplo
~~~css
{{ site.data.CSS.b.border-image.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.b.border-image.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
