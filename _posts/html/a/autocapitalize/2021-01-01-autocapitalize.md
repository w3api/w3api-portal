---
title: autocapitalize
permalink: /HTML/autocapitalize/
date: 2021-07-15 00:16:26.383845 +0200
key: HTML.a.autocapitalize
category: HTML
tags: ['atributo html','html 5.2']
sidebar: 
  nav: html
---

## Descripción
{{site.data.HTML.a.autocapitalize.description }}

## Sintaxis
~~~html
<elemento autocapitalize="off|sentences|words|characters"></elemento>
~~~

## Ejemplo
~~~java
{{ site.data.HTML.a.autocapitalize.code}}
~~~

## Artículos
<ul>
{%- for _ldc in site.data.HTML.a.autocapitalize.ldc -%}
   <li>
       <a href="{{_ldc['url'] }}">{{ _ldc['nombre'] }}</a>
   </li>
{%- endfor -%}
</ul>
