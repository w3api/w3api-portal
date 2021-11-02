---
title: text-shadow
permalink: /CSS/text-shadow/
date: 2021-03-07 03:12:31.155275
key: CSS.t.text-shadow
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.t.text-shadow.description }}

## Sintaxis
~~~css
text-shadow : none | [ <color>? && <length>{2,3} ]#
~~~

## Valores
* **color**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-shadow valor="color" %}
* **length**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-shadow valor="length" %}
* **none**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-shadow valor="none" %}

## Ejemplo
~~~css
{{ site.data.CSS.t.text-shadow.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.t.text-shadow.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
