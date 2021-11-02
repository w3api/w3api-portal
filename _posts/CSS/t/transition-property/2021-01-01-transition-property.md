---
title: transition-property
permalink: /CSS/transition-property/
date: 2021-03-07 03:12:59.047898
key: CSS.t.transition-property
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.t.transition-property.description }}

## Sintaxis
~~~css
transition-property : none | <single-transition-property>#
~~~

## Valores
* **single-transition-property**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transition-property valor="single-transition-property" %}
* **none**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.transition-property valor="none" %}

## Ejemplo
~~~css
{{ site.data.CSS.t.transition-property.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.t.transition-property.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
