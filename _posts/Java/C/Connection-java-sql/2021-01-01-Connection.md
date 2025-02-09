---
title: Connection
permalink: /Java/Connection-java-sql/
excerpt: "La clase Connection maneja conexiones a bases de datos SQL en Java."
date: 2025-02-09
last_modified_at: 2025-02-09
key: Java.C.Connection-java-sql
category: Java
tags: [clase java,java 1.1,java se,java.sql,java.sql]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## **Descripción**


La clase `Connection` del paquete [`java.sql`](https://w3api.com/Java/tag/java.sql/) es una interfaz que representa una conexión con una [base de datos SQ](https://www.manualweb.net/sql/)L. Esta conexión permite ejecutar sentencias [SQL](https://www.manualweb.net/sql/), gestionar transacciones y obtener información sobre la base de datos. Es el punto de entrada principal para interactuar con una base de datos desde una aplicación [Java](https://www.manualweb.net/java/).


## **Sintaxis**


```java
public interface Connection extends Wrapper, AutoCloseable
```


## **Campos**

- [TRANSACTION_NONE](https://w3api.com/Java/Connection-java-sql/TRANSACTION_NONE/)
- [TRANSACTION_READ_COMMITTED](https://w3api.com/Java/Connection-java-sql/TRANSACTION_READ_COMMITTED/)
- [TRANSACTION_READ_UNCOMMITTED](https://w3api.com/Java/Connection-java-sql/TRANSACTION_READ_UNCOMMITTED/)
- [TRANSACTION_REPEATABLE_READ](https://w3api.com/Java/Connection-java-sql/TRANSACTION_REPEATABLE_READ/)
- [TRANSACTION_SERIALIZABLE](https://w3api.com/Java/Connection-java-sql/TRANSACTION_SERIALIZABLE/)

## **Métodos**

- [abort()](https://w3api.com/Java/Connection-java-sql/abort/)
- [beginRequest()](https://w3api.com/Java/Connection-java-sql/beginRequest/)
- [clearWarnings()](https://w3api.com/Java/Connection-java-sql/clearWarnings/)
- [close()](https://w3api.com/Java/Connection-java-sql/close/)
- [commit()](https://w3api.com/Java/Connection-java-sql/commit/)
- [createArrayOf()](https://w3api.com/Java/Connection-java-sql/createArrayOf/)
- [createBlob()](https://w3api.com/Java/Connection-java-sql/createBlob/)
- [createClob()](https://w3api.com/Java/Connection-java-sql/createClob/)
- [createNClob()](https://w3api.com/Java/Connection-java-sql/createNClob/)
- [createSQLXML()](https://w3api.com/Java/Connection-java-sql/createSQLXML/)
- [createStatement()](https://w3api.com/Java/Connection-java-sql/createStatement/)
- [createStruct()](https://w3api.com/Java/Connection-java-sql/createStruct/)
- [endRequest()](https://w3api.com/Java/Connection-java-sql/endRequest/)
- [getAutoCommit()](https://w3api.com/Java/Connection-java-sql/getAutoCommit/)
- [getCatalog()](https://w3api.com/Java/Connection-java-sql/getCatalog/)
- [getClientInfo()](https://w3api.com/Java/Connection-java-sql/getClientInfo/)
- [getHoldability()](https://w3api.com/Java/Connection-java-sql/getHoldability/)
- [getMetaData()](https://w3api.com/Java/Connection-java-sql/getMetaData/)
- [getNetworkTimeout()](https://w3api.com/Java/Connection-java-sql/getNetworkTimeout/)
- [getSchema()](https://w3api.com/Java/Connection-java-sql/getSchema/)
- [getTransactionIsolation()](https://w3api.com/Java/Connection-java-sql/getTransactionIsolation/)
- [getTypeMap()](https://w3api.com/Java/Connection-java-sql/getTypeMap/)
- [getWarnings()](https://w3api.com/Java/Connection-java-sql/getWarnings/)
- [isClosed()](https://w3api.com/Java/Connection-java-sql/isClosed/)
- [isReadOnly()](https://w3api.com/Java/Connection-java-sql/isReadOnly/)
- [isValid()](https://w3api.com/Java/Connection-java-sql/isValid/)
- [nativeSQL()](https://w3api.com/Java/Connection-java-sql/nativeSQL/)
- [prepareCall()](https://w3api.com/Java/Connection-java-sql/prepareCall/)
- [prepareStatement()](https://w3api.com/Java/Connection-java-sql/prepareStatement/)
- [releaseSavepoint()](https://w3api.com/Java/Connection-java-sql/releaseSavepoint/)
- [rollback()](https://w3api.com/Java/Connection-java-sql/rollback/)
- [setAutoCommit()](https://w3api.com/Java/Connection-java-sql/setAutoCommit/)
- [setCatalog()](https://w3api.com/Java/Connection-java-sql/setCatalog/)
- [setClientInfo()](https://w3api.com/Java/Connection-java-sql/setClientInfo/)
- [setHoldability()](https://w3api.com/Java/Connection-java-sql/setHoldability/)
- [setNetworkTimeout()](https://w3api.com/Java/Connection-java-sql/setNetworkTimeout/)
- [setReadOnly()](https://w3api.com/Java/Connection-java-sql/setReadOnly/)
- [setSavepoint()](https://w3api.com/Java/Connection-java-sql/setSavepoint/)
- [setSchema()](https://w3api.com/Java/Connection-java-sql/setSchema/)
- [setShardingKey()](https://w3api.com/Java/Connection-java-sql/setShardingKey/)
- [setShardingKeyIfValid()](https://w3api.com/Java/Connection-java-sql/setShardingKeyIfValid/)
- [setTransactionIsolation()](https://w3api.com/Java/Connection-java-sql/setTransactionIsolation/)
- [setTypeMap()](https://w3api.com/Java/Connection-java-sql/setTypeMap/)

## **Ejemplo**


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


## **Artículos**

- [Actualizar datos con JDBC](http://lineadecodigo.com/Java/actualizar-datos-con-jdbc/)
- [Conectar MySQL con Java](https://lineadecodigo.com/java/conectar-mysql-java/)
