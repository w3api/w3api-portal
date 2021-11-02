---
layout: page
title: Colaborar
permalink: /colaborar/
key: colaborar
---

Colaborar con **W3Api** es muy sencillo, simplemente tienes que añadir el contenido que quieras sobre [nuestro repositorio de GitHub][W3ApGitHub] y solicitar un ***pull-request*** en la rama principal. Algo muy sencillo gracias a los editores que ofrece [Github][Github].

Todos los elementos de **W3Api** tiene un icono que permite llevar al ***fichero JSON*** que contiene la información del elemento como es su ***descripción***, ***sintaxis***, ***código de ejemplo*** o ***artículos de la web relacionados con el documento***.

![Editar elemento en W3Api][EditarElemento]{:class="img-responsive"}

Si quieres colaborar de otra forma con **W3Api** te puedes [poner en contacto con nostros][contacto].

## Estructura ficheros JSON
Si vas a editar el contenido de los **ficheros JSON** tienes que conocer que en la estructura del ***fichero JSON*** encontramos cuatros elementos básicos que se repiten en todos los ficheros

* **description**, descripción del elemento.
* **sintaxis**, sintaxis base del elemento.
* **code**, código de ejemplo que muestre cómo se puede utilizar el elemento.
* **ldc**, lista con pares de nombre/url de sitios que contengan explicaciones del elemento.

~~~json
{
    "description": "Soy la descripción",
    "sintaxis": "Sintaxis del elemento",
    "code": "Código de ejemplo del elemento",
    "ldc": [
        {
            "nombre": "Articulo",
            "url": "http://servidor.com/pagina-con-articulo"
        }        
    ]
}
~~~

Un elemento puede contener listas de elementos anidados agrupadas en colecciones. Así, por ejemplo, una **clase Java** tiene **constructores**, **métodos**. A su vez, el **método** tiene **parámetros** o lanza **excepciones**.

Así podemos crear elementos anidados de la siguiente manera. Por ejemplo, una clase con métodos tendría la siguiente estructura:

~~~json
{
    "description": "Soy la descripción",
    "sintaxis": "Sintaxis del elemento",
    "code": "Código de ejemplo del elemento",
    "ldc": [],
    "metodos": [
        {
            "nombre": "Nombre Método",
            "description": "Descripcion Método",
            "sintaxix": "Sintáxis Método",
            "code": "Código ejemplo del método",
            "ldc": [],
            "parametros": [
                {
                    "nombre": "Parámetro 1",
                    "description": "Descripción Parámetro 1"
                },
                {
                    "nombre": "Parámetro 2",
                    "description": "Descripción Parámetro 2"
                }
            ]
        }    
    ]
}
~~~

[W3ApGitHub]: https://github.com/w3api/w3api
[EditarElemento]: /assets/images/contribute/edit.png
[Github]: https://github.com
[contacto]: /contactar/