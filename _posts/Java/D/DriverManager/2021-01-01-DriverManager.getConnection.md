---
title: DriverManager.getConnection()
permalink: /Java/DriverManager/getConnection/
excerpt: "El método getConnection permite establecer conexiones a bases de datos en Java."
date: 2024-03-04
last_modified_at: 2025-02-09
key: Java.D.DriverManager.getConnection
category: Java
tags: [metodo java,java 1.1,java.sql,java.sql]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


El método `getConnection()` del objeto [`DriverManager`](https://www.w3api.com/Java/DriverManager/) nos permite establecer una conexión con la base de datos [SQL](https://www.manualweb.net/sql/).


Para establecer una conexión es necesario proporcionar una URL de conexión que identifique la base de datos a la que nos queremos conectar. Opcionalmente podemos proporcionar un usuario y contraseña si la base de datos requiere autenticación. El método `getConnection()` devolverá un objeto [`Connection`](https://w3api.com/Java/Connection-java-sql/) que representa la conexión establecida con la base de datos.


La cadena de conexión tiene la estructura:


```java
jdbc:subprotocolo://servidor:puerto/base_de_datos
```


Dónde:

- **subprotocolo:** es el tipo de base de datos a la que nos queremos conectar (mysql, postgresql, oracle,...)
- **servidor:** es el nombre o IP del servidor donde se encuentra la base de datos
- **puerto:** es el puerto por el que escucha la base de datos
- **base_de_datos:** es el nombre de la base de datos a la que nos queremos conectar

Al ejecutar el método `getConnection()` del objeto [`DriverManager`](https://www.w3api.com/Java/DriverManager/) se puede lanzar la excepción [`SQLException`](https://www.w3api.com/Java/SQLException/) en caso de que haya algún problema al establecer la conexión. Esto puede ocurrir por varios motivos, como credenciales incorrectas, servidor no disponible o problemas de red. Por lo tanto, es importante manejar adecuadamente esta excepción en nuestro código.


También se puede lanzar la [`SQLTimeoutException`](https://w3api.com/Java/SQLTimeoutException/) en caso de que la conexión no se pueda establecer dentro del tiempo límite especificado. Es importante establecer tiempos de espera adecuados para evitar que nuestra aplicación se quede bloqueada indefinidamente esperando una respuesta de la base de datos. Este tiempo de conexión se establece mediante el método [`setLoginTimeout()`](https://www.w3api.com/Java/DriverManager/setLoginTimeout/).


## Sintaxis


```java
public static Connection getConnection(String url) throws SQLException
public static Connection getConnection(String url, String user, String password) throws SQLException
public static Connection getConnection(String url, Properties info) throws SQLException
```


## Parámetros 

- **Properties info:** Un objeto Properties que contiene un conjunto de pares clave-valor con la configuración de la conexión. Puede incluir propiedades como el usuario, contraseña, timeout de conexión y otras opciones específicas del driver.
- **String url:** La URL de conexión JDBC que especifica la ubicación y los parámetros de la base de datos a la que se desea conectar. Debe seguir el formato jdbc:subprotocolo://servidor:puerto/base_de_datos.
- **String user:** El nombre de usuario para autenticarse en la base de datos. Este parámetro es necesario si la base de datos requiere autenticación.
- **String password:** La contraseña asociada al usuario para autenticarse en la base de datos. Este parámetro es necesario si la base de datos requiere autenticación.

## Excepciones


[`SQLException`](https://w3api.com/Java/SQLException/), [`SQLTimeoutException`](https://w3api.com/Java/SQLTimeoutException/)


## Clase Padre


[`DriverManager`](https://www.w3api.com/Java/DriverManager/)


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
