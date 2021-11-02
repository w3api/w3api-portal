---
title: text-decoration
permalink: /CSS/text-decoration/
date: 2021-03-07 03:12:03.677955
key: CSS.t.text-decoration
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.t.text-decoration.description }}

## Sintaxis
~~~css
text-decoration : <'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'>
~~~

## Valores
* **text-decoration-line**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-decoration valor="text-decoration-line" %}
* **text-decoration-color**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-decoration valor="text-decoration-color" %}
* **text-decoration-style**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-decoration valor="text-decoration-style" %}

## Ejemplo
~~~css
{{ site.data.CSS.t.text-decoration.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.t.text-decoration.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
