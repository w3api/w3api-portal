---
title: break-inside
permalink: /CSS/break-inside/
date: 2021-03-07 03:00:18.896973
key: CSS.b.break-inside
category: CSS
tags: ['propiedad css']
sidebar: 
  nav: css
---

## Descripción
{{site.data.CSS.b.break-inside.description }}

## Sintaxis
~~~css
break-inside : auto | avoid | avoid-page | avoid-column | avoid-region
~~~

## Valores
* **avoid-column**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.break-inside valor="avoid-column" %}
* **avoid**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.break-inside valor="avoid" %}
* **avoid-page**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.break-inside valor="avoid-page" %}
* **avoid-region**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.break-inside valor="avoid-region" %}
* **auto**,  {% include w3api/value_description.html propiedad=site.data.CSS.b.break-inside valor="auto" %}

## Ejemplo
~~~css
{{ site.data.CSS.b.break-inside.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.CSS.b.break-inside.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
