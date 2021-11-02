---
title: text-indent
permalink: /CSS/text-indent/
date: 2021-03-07 03:12:21.030923
key: CSS.t.text-indent
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.t.text-indent.description }}

## Sintaxis
~~~css
text-indent : [ <length-percentage> ] && hanging? && each-line?
~~~

## Valores
* **hanging**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-indent valor="hanging" %}
* **length-percentage**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-indent valor="length-percentage" %}
* **each-line**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-indent valor="each-line" %}

## Ejemplo
~~~css
{{ site.data.CSS.t.text-indent.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.t.text-indent.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
