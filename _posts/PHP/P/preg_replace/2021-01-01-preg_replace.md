---
title: preg_replace
permalink: /PHP/preg_replace/
excerpt: "La función preg_replace permite buscar y reemplazar texto usando expresiones regulares en PHP."
date: 2025-02-17
last_modified_at: 2025-02-17
key: PHP.p.preg_replace
category: PHP
tags: [funcion php,php 4.0,pcre]
image: "/assets/images/php.png"
sidebar:
  nav: php
---

## **Descripción**


La función `preg_replace()` de [PHP](https://www.manualweb.net/php/) es una función que nos permite realizar búsquedas y reemplazos de texto mediante el uso de expresiones regulares. Esta función es especialmente útil cuando necesitamos manipular cadenas de texto de forma avanzada, permitiéndonos buscar patrones complejos y reemplazarlos con nuevo contenido.


Nos devolverá una cadena de texto modificada si la operación fue exitosa, o null si ocurrió un error. Si el parámetro `$subject` es un array, devolverá un array con las cadenas modificadas. La función también puede devolver `null` si el patrón de búsqueda no es válido.


## **Sintaxis**


```php
preg_replace(
    string|array $pattern,
    string|array $replacement,
    string|array $subject,
    int $limit = -1,
    int &$count = null
): string|array|null
```


## Parámetros

- `$pattern`: El patrón de búsqueda que se utilizará. Puede ser una cadena única o un array de patrones. Debe seguir la sintaxis de expresiones regulares de PCRE.
- `$replacement`: El texto de reemplazo para cada coincidencia encontrada. Puede ser una cadena única o un array de reemplazos que correspondan con los patrones.
- `$subject`: La cadena o array de cadenas de entrada donde se realizará la búsqueda y reemplazo.
- `$limit`: Número máximo de reemplazos para cada patrón. El valor predeterminado -1 significa sin límite.
- `$count:` Si se proporciona, esta variable se establecerá al número de reemplazos realizados durante la operación.

## **Ejemplo**


Veamos un ejemplo simple de cómo utilizar `preg_replace()` para reemplazar patrones en una cadena de texto:


```php
// Reemplazar números por la palabra "número"
$texto = "Tengo 3 manzanas y 2 peras";
$resultado = preg_replace("/\d/", "número", $texto);
echo $resultado; // Imprime: "Tengo número manzanas y número peras"

// Reemplazar múltiples patrones
$patrones = array("/gato/", "/perro/");
$reemplazos = array("felino", "canino");
$texto = "Mi gato y mi perro son amigos";
$resultado = preg_replace($patrones, $reemplazos, $texto);
echo $resultado; // Imprime: "Mi felino y mi canino son amigos"
```


## **Artículos**

- 
