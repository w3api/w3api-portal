---
title: transform
permalink: /CSS/transform/
date: 2021-03-07 03:12:45.612156
key: CSS.t.transform
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.t.transform.description }}

## Sintaxis
~~~css
transform : none | <transform-list>
~~~

## Valores
* **none**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transform valor="none" %}
* **transform-list**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transform valor="transform-list" %}

## Ejemplo
~~~css
{{ site.data.CSS.t.transform.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.t.transform.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
