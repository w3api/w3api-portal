---
title: PreparedStatement.executeQuery()
permalink: /Java/PreparedStatement/executeQuery/
excerpt: "El método executeQuery permite ejecutar consultas y obtener resultados en Java."
date: 2024-03-06
last_modified_at: 2025-02-09
key: Java.P.PreparedStatement.executeQuery
category: Java
tags: [metodo java,java 1.1,java.sql,java se,java se]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


El método `executeQuery()` de la clase [`PreparedStatement`](https://www.w3api.com/Java/PreparedStatement/) ejecuta una query y devuelve el resultado en un [`ResultSet`](https://www.w3api.com/Java/ResultSet/).


La principal ventaja de utilizar executeQuery() es que está optimizado para ejecutar sentencias SELECT y recuperar datos de una base de datos. A diferencia de [`executeUpdate()`](https://www.w3api.com/Java/PreparedStatement/executeUpdate/), que se utiliza para operaciones de modificación como INSERT, UPDATE o DELETE, `executeQuery()` está diseñado específicamente para consultas que devuelven resultados.


La excepción [`SQLException`](https://www.w3api.com/Java/SQLException/) puede lanzarse si ocurre algún error durante la ejecución de la consulta [SQL](https://www.manualweb.net/sql/). Esto puede suceder por diversas razones, como problemas de conexión con la base de datos, errores de sintaxis en la consulta [SQL](https://www.manualweb.net/sql/) o problemas de permisos.


## Sintaxis


```java
ResultSet executeQuery() throws SQLException
```


## Excepciones


[`SQLException`](https://www.w3api.com/Java/SQLException/)


## Clase Padre


[`PreparedStatement`](https://www.w3api.com/Java/PreparedStatement/)


## Ejemplo


```java
try {
    stmt = con.prepareStatement("SELECT pais FROM paises");
    rs = stmt.executeQuery();

    while (rs.next())
      System.out.println (rs.getString("pais"));

} catch (SQLException sqle) { 
    System.out.println("Error en la ejecución:" 
      + sqle.getErrorCode() + " " + sqle.getMessage());    
}
```


## Artículos

- [Conectar MySQL con Java](https://lineadecodigo.com/java/conectar-mysql-java/)
