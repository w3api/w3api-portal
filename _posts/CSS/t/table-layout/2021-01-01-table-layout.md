---
title: table-layout
permalink: /CSS/table-layout/
date: 2021-03-07 03:11:46.398386
key: CSS.t.table-layout
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.t.table-layout.description }}

## Sintaxis
~~~css
table-layout : auto | fixed | inherit
~~~

## Valores
* **fixed**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.table-layout valor="fixed" %}
* **auto**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.table-layout valor="auto" %}
* **inherit**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.table-layout valor="inherit" %}

## Ejemplo
~~~css
{{ site.data.CSS.t.table-layout.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.t.table-layout.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
