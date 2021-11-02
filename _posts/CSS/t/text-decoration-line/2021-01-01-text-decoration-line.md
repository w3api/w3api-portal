---
title: text-decoration-line
permalink: /CSS/text-decoration-line/
date: 2021-03-07 03:12:08.038958
key: CSS.t.text-decoration-line
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.t.text-decoration-line.description }}

## Sintaxis
~~~css
text-decoration-line : none | [ underline || overline || line-through || blink ]
~~~

## Valores
* **blink**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-decoration-line valor="blink" %}
* **none**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-decoration-line valor="none" %}
* **overline**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-decoration-line valor="overline" %}
* **line-through**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-decoration-line valor="line-through" %}
* **underline**,  {% include w3api/value_description.html propiedad=site.data.CSS.t.text-decoration-line valor="underline" %}

## Ejemplo
~~~css
{{ site.data.CSS.t.text-decoration-line.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.t.text-decoration-line.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
