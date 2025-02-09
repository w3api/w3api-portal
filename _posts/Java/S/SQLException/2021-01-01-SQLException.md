---
title: SQLException
permalink: /Java/SQLException/
excerpt: "La SQLException maneja errores en operaciones de bases de datos usando JDBC."
date: 2024-03-07
last_modified_at: 2025-02-09
key: Java.S.SQLException
category: Java
tags: [clase java,java 1.1,java.sql,java se,java.sql]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


La excepción `SQLException` es una clase que extiende de [`Exception`](https://www.w3api.com/Java/Exception/) y se utiliza para manejar errores específicos que ocurren durante operaciones con bases de datos utilizando JDBC. Esta excepción proporciona información detallada sobre el error ocurrido, incluyendo un código de error específico del proveedor de la base de datos y un estado [SQL](https://www.manualweb.net/sql/) estándar que permite identificar el tipo de problema encontrado.


Algunos de los estados [SQL](https://www.manualweb.net/sql/) más corrientes son:

- 00000: Éxito - La operación se completó correctamente
- 01002: Error de desconexión - La conexión con la base de datos se perdió
- 08001: Error de conexión - No se pudo establecer la conexión con el servidor
- 22001: Error de datos - Los datos son demasiado largos para la columna
- 23000: Violación de restricción - Violación de clave única o restricción de integridad
- 42000: Error de sintaxis - Error en la sintaxis de la sentencia SQL
- 42601: Error de sintaxis - Error en la sintaxis o violación de reglas gramaticales en la sentencia SQL

## Sintaxis


```java
public class SQLException extends Exception implements Iterable<Throwable>
```


## Constructores

- [SQLException()](https://www.w3api.com/Java/SQLException/SQLException/)

## Métodos

- [getErrorCode()](https://www.w3api.com/Java/SQLException/getErrorCode/)
- [getNextException()](https://www.w3api.com/Java/SQLException/getNextException/)
- [getSQLState()](https://www.w3api.com/Java/SQLException/getSQLState/)
- [iterator()](https://www.w3api.com/Java/SQLException/iterator/)
- [setNextException()](https://www.w3api.com/Java/SQLException/setNextException/)

## Ejemplo


```java
public class InsertarDatos {

  public static void main(String[] args) {
 
    Connection con = null;
     PreparedStatement stmt = null;

     String sDriver = "com.mysql.jdbc.Driver";
     String sURL = "jdbc:mysql://localhost:3306/lineadecodigo";

     try{
        Class.forName(sDriver).newInstance();    
        con = DriverManager.getConnection(sURL,"root","");
        
        String sISBN = "84-9815-212-7";
        String sTitulo = "Yo, Claudio";
        String sDescripcion="Supuesta autobiografía de Claudio";
        String sCategoria = "Novela Histórica";
        int idAutor = 3;
                     
        stmt = con.prepareStatement("INSERT INTO libros VALUES (?,?,?,?,?)");
        stmt.setString(1,sISBN);
        stmt.setInt(2,idAutor);
        stmt.setString(3,sTitulo);
        stmt.setString(4,sDescripcion);
        stmt.setString(5,sCategoria);
                     
        int retorno = stmt.executeUpdate();
        if (retorno>0)
           System.out.println("Insertado correctamente");      
                     
     } catch (SQLException sqle){
        System.out.println("SQLState: " 
           + sqle.getSQLState());
        System.out.println("SQLErrorCode: " 
           + sqle.getErrorCode());
        sqle.printStackTrace();
     } catch (Exception e){
        e.printStackTrace();
     } finally {
        if (con != null) {
           try{
              stmt.close();
              con.close();
           } catch(Exception e){
              e.printStackTrace();
           }
        }
     }           
   }
}
```


## Artículos

- [Actualizar datos con JDBC](http://lineadecodigo.com/Java/actualizar-datos-con-jdbc/)
- [Conectar MySQL con Java](https://lineadecodigo.com/java/conectar-mysql-java/)
