---
title: align-content
permalink: /CSS/align-content/
date: 2021-03-07 02:57:15.180438
key: CSS.a.align-content
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.a.align-content.description }}

## Sintaxis
~~~css
align-content : normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>
~~~

## Valores
* **content-distribution**,  {% include w3api/value_description.html propiedad=site.data.CSS.a.align-content valor="content-distribution" %}
* **normal**,  {% include w3api/value_description.html propiedad=site.data.CSS.a.align-content valor="normal" %}
* **content-position**,  {% include w3api/value_description.html propiedad=site.data.CSS.a.align-content valor="content-position" %}
* **overflow-position**,  {% include w3api/value_description.html propiedad=site.data.CSS.a.align-content valor="overflow-position" %}
* **baseline-position**,  {% include w3api/value_description.html propiedad=site.data.CSS.a.align-content valor="baseline-position" %}

## Ejemplo
~~~css
{{ site.data.CSS.a.align-content.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.a.align-content.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
