---
title: text-transform
permalink: /CSS/text-transform/
date: 2021-03-07 03:12:34.061187
key: CSS.t.text-transform
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.t.text-transform.description }}

## Sintaxis
~~~css
text-transform : none | [capitalize | uppercase | lowercase ] || full-width || full-size-kana
~~~

## Valores
* **none**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-transform valor="none" %}
* **uppercase**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-transform valor="uppercase" %}
* **lowercase**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-transform valor="lowercase" %}
* **full-size-kana**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-transform valor="full-size-kana" %}
* **capitalize**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-transform valor="capitalize" %}
* **full-width**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-transform valor="full-width" %}

## Ejemplo
~~~css
{{ site.data.CSS.t.text-transform.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.t.text-transform.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
