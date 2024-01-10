---
title: translate
permalink: /HTML/translate/
excerpt: "El atributo translate en HTML permite especificar si el contenido debe traducirse. Útil para contenido multilingüe."
date: 2024-01-08
last_modified_at: 2024-01-10
key: HTML.t.translate
category: HTML
tags: [atributo global html,html 5]
image: "/assets/images/HTML.png"
sidebar:
  nav: html
---

## Descripción


El atributo general `translate` en [HTML](https://www.manualweb.net/html/) se utiliza para especificar si el contenido de un elemento debe ser traducido o no. Este atributo puede ser muy útil cuando se trabaja con contenido multilingüe.


Si el atributo `translate` se establece en "no", los traductores automáticos y los lectores de pantalla no traducirán el contenido del elemento. Esto puede ser especialmente útil para preservar el significado de palabras o frases específicas en el idioma original.


## Sintaxis


El atributo `translate` se puede usar con cualquier elemento [HTML](https://www.manualweb.net/html/) y puede tomar dos valores: _"yes"_ o _"no"_. Si no se especifica, el valor predeterminado es _"yes"_, lo que significa que el contenido se traducirá.


```html
<element translate="yes|no">
</element>
```


## Ejemplo


Aquí hay un ejemplo de cómo se puede usar el atributo `translate` en un elemento [HTML](https://www.manualweb.net/html/):


```html
<h1>Marcar para no traducir</h1>
<p>Si utilizas in traductor podemos incluir marcas en nuestro código HTML para que haya partes que no se traduzcan, ya que representen nombres, marcas,... o elementos que no necesitan traducción.</p>
        
<p translate="no">Explicado por Línea de Código. Si pruebas verás que esta última línea no se traduce.</p>
```


En este caso, la frase dentro del segundo elemento `<p>` no se traducirá, independientemente del idioma del resto de la página.


## Artículos

- [Texto no traducible con HTML5](https://lineadecodigo.com/html5/texto-no-traducible-con-html5/)
