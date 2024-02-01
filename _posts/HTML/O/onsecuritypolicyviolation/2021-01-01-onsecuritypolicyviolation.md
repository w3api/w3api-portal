---
title: onsecuritypolicyviolation
permalink: /HTML/onsecuritypolicyviolation/
excerpt: "El evento onsecuritypolicyviolation en HTML se dispara cuando se viola la política de seguridad de contenido (CSP) de una página web. Permite a los desarrolladores responder y proteger la integridad del sitio web."
date: 2024-01-19
last_modified_at: 2024-02-01
key: HTML.o.onsecuritypolicyviolation
category: HTML
tags: [evento html,html 5]
image: "/assets/images/html.png"
sidebar:
  nav: html
---

## Descripción


El evento `onsecuritypolicyviolation` de [HTML](https://www.manualweb.net/html/) es un evento que se dispara cuando se viola la política de seguridad de contenido (CSP) de una página web. Este evento permite a los desarrolladores responder a las violaciones de seguridad y tomar medidas para proteger la integridad del sitio web.


## Sintaxis


```javascript
elemento.onsecuritypolicyviolation = funcionReferencia;
```


## Ejemplo


```javascript
document.body.onsecuritypolicyviolation = function(e) {
  console.log('Se ha violado la política de seguridad:', e.securityPolicyViolationEvent);
};
```


## Artículos

- 
