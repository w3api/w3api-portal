---
title: align-items
permalink: /CSS/align-items/
date: 2021-03-07 02:57:18.098474
key: CSS.a.align-items
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.a.align-items.description }}

## Sintaxis
~~~css
align-items : normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]
~~~

## Valores
* **self-position**,  {% include w3api/value_description.html propiedad=site.data.CSS.a.align-items valor="self-position" %}
* **normal**,  {% include w3api/value_description.html propiedad=site.data.CSS.a.align-items valor="normal" %}
* **overflow-position**,  {% include w3api/value_description.html propiedad=site.data.CSS.a.align-items valor="overflow-position" %}
* **baseline-position**,  {% include w3api/value_description.html propiedad=site.data.CSS.a.align-items valor="baseline-position" %}
* **stretch**,  {% include w3api/value_description.html propiedad=site.data.CSS.a.align-items valor="stretch" %}

## Ejemplo
~~~css
{{ site.data.CSS.a.align-items.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.a.align-items.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
