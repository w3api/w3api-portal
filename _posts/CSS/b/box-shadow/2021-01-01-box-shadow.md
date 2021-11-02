---
title: box-shadow
permalink: /CSS/box-shadow/
date: 2021-03-07 03:00:09.132207
key: CSS.b.box-shadow
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.b.box-shadow.description }}

## Sintaxis
~~~css
box-shadow : none | <shadow>#
~~~

## Valores
* **shadow**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.box-shadow valor="shadow" %}
* **none**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.box-shadow valor="none" %}

## Ejemplo
~~~css
{{ site.data.CSS.b.box-shadow.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.b.box-shadow.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
