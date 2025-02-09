---
title: DriverManager
permalink: /Java/DriverManager/
excerpt: "La clase DriverManager gestiona conexiones a bases de datos en Java mediante controladores JDBC."
date: 2024-03-04
last_modified_at: 2025-02-09
key: Java.D.DriverManager
category: Java
tags: [clase java,java 1.1,java.sql,java se,java.sql]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


La clase `DriverManager` de [Java](https://www.manualweb.net/java/) es una clase fundamental para la gestión de conexiones a bases de datos. Actúa como un s**ervicio que gestiona los controladores JDBC (Java Database Connectivity)** registrados en el sistema. Su principal función es establecer conexiones entre una aplicación [Java](https://www.manualweb.net/java/) y una base de datos utilizando el controlador más apropiado entre los disponibles.


## Sintaxis


```java
public class DriverManager extends Object
```


## Métodos

- [deregisterDriver()](https://www.w3api.com/Java/DriverManager/deregisterDriver/)
- [drivers()](https://www.w3api.com/Java/DriverManager/drivers/)
- [getConnection()](https://www.w3api.com/Java/DriverManager/getConnection/)
- [getDriver()](https://www.w3api.com/Java/DriverManager/getDriver/)
- [getDrivers()](https://www.w3api.com/Java/DriverManager/getDrivers/)
- [getLoginTimeout()](https://www.w3api.com/Java/DriverManager/getLoginTimeout/)
- [getLogStream()](https://www.w3api.com/Java/DriverManager/getLogStream/)
- [getLogWriter()](https://www.w3api.com/Java/DriverManager/getLogWriter/)
- [println()](https://www.w3api.com/Java/DriverManager/println/)
- [registerDriver()](https://www.w3api.com/Java/DriverManager/registerDriver/)
- [setLoginTimeout()](https://www.w3api.com/Java/DriverManager/setLoginTimeout/)
- [setLogStream()](https://www.w3api.com/Java/DriverManager/setLogStream/)
- [setLogWriter()](https://www.w3api.com/Java/DriverManager/setLogWriter/)

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
