---
title: FileExistsError
permalink: /Python/FileExistsError/
excerpt: "La excepción FileExistsError ocurre al intentar crear un archivo o directorio existente."
date: 2025-01-23
last_modified_at: 2025-01-23
key: Python.F.FileExistsError
category: Python
tags: [excepcion python,python 3.3]
image: "/assets/images/python.png"
sidebar:
  nav: python
---

## Descripción


La excepción `FileExistsError` se lanza cuando intentamos crear un archivo o directorio que ya existe en el sistema. Esta excepción es una subclase de [`OSError`](https://www.w3api.com/Python/OSError/) y se lanza específicamente cuando una operación de creación de archivo o directorio falla porque el destino ya existe.


## Sintaxis


```python
exception FileExistsError
```


## Ejemplo


Ejemplo de cómo se produce la excepción `FileExistsError` cuando intentamos crear un directorio que ya existe:


```python
import os

# Intentar crear un directorio que ya existe
try:
    os.mkdir("mi_directorio")
except FileExistsError:
    print("Error: El directorio ya existe")
```


## Artículos

- [Crear una carpeta en Python](https://lineadecodigo.com/python/crear-una-carpeta-en-python/)
