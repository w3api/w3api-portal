---
title: transform-origin
permalink: /CSS/transform-origin/
date: 2021-03-07 03:12:50.188486
key: CSS.t.transform-origin
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.t.transform-origin.description }}

## Sintaxis
~~~css
transform-origin : [ left | center | right | top | bottom | <length-percentage> ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ] <length>? | [[ center | left | right ] && [ center | top | bottom ]] <length>?
~~~

## Valores
* **bottom**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transform-origin valor="bottom" %}
* **center**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transform-origin valor="center" %}
* **left**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transform-origin valor="left" %}
* **right**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transform-origin valor="right" %}
* **length-percentage**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transform-origin valor="length-percentage" %}
* **length**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transform-origin valor="length" %}
* **top**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transform-origin valor="top" %}

## Ejemplo
~~~css
{{ site.data.CSS.t.transform-origin.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.t.transform-origin.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
