---
title: PreparedStatement
permalink: /Java/PreparedStatement/
excerpt: "La clase PreparedStatement permite preparar sentencias SQL parametrizadas en Java."
date: 2024-03-06
last_modified_at: 2025-02-09
key: Java.P.PreparedStatement
category: Java
tags: [interface java,java 1.1,java.sql,java se,java.sql]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## Descripción


La clase `PreparedStatement` de [Java](https://www.manualweb.net/java/)


es una interfaz que extiende de [`Statement`](https://www.w3api.com/Java/Statement/) y nos permite preparar **sentencias SQL parametrizadas**. A diferencia de [`Statement`](https://www.w3api.com/Java/Statement/), `PreparedStatement` **precompila la consulta** [**SQL**](https://www.manualweb.net/sql/) y permite la reutilización eficiente de la misma con diferentes parámetros. Esto no solo mejora el rendimiento sino que también a**yuda a prevenir ataques de inyección** [**SQL**](https://www.manualweb.net/sql/) al manejar de forma segura los parámetros de entrada.


## Sintaxis


```java
public interface PreparedStatement extends Statement
```


## Métodos

- [addBatch()](https://www.w3api.com/Java/PreparedStatement/addBatch/)
- [clearParameters()](https://www.w3api.com/Java/PreparedStatement/clearParameters/)
- [execute()](https://www.w3api.com/Java/PreparedStatement/execute/)
- [executeLargeUpdate()](https://www.w3api.com/Java/PreparedStatement/executeLargeUpdate/)
- [executeQuery()](https://www.w3api.com/Java/PreparedStatement/executeQuery/)
- [executeUpdate()](https://www.w3api.com/Java/PreparedStatement/executeUpdate/)
- [getMetaData()](https://www.w3api.com/Java/PreparedStatement/getMetaData/)
- [getParameterMetaData()](https://www.w3api.com/Java/PreparedStatement/getParameterMetaData/)
- [setArray()](https://www.w3api.com/Java/PreparedStatement/setArray/)
- [setAsciiStream()](https://www.w3api.com/Java/PreparedStatement/setAsciiStream/)
- [setBigDecimal()](https://www.w3api.com/Java/PreparedStatement/setBigDecimal/)
- [setBinaryStream()](https://www.w3api.com/Java/PreparedStatement/setBinaryStream/)
- [setBlob()](https://www.w3api.com/Java/PreparedStatement/setBlob/)
- [setBoolean()](https://www.w3api.com/Java/PreparedStatement/setBoolean/)
- [setByte()](https://www.w3api.com/Java/PreparedStatement/setByte/)
- [setBytes()](https://www.w3api.com/Java/PreparedStatement/setBytes/)
- [setCharacterStream()](https://www.w3api.com/Java/PreparedStatement/setCharacterStream/)
- [setClob()](https://www.w3api.com/Java/PreparedStatement/setClob/)
- [setDate()](https://www.w3api.com/Java/PreparedStatement/setDate/)
- [setDouble()](https://www.w3api.com/Java/PreparedStatement/setDouble/)
- [setFloat()](https://www.w3api.com/Java/PreparedStatement/setFloat/)
- [setInt()](https://www.w3api.com/Java/PreparedStatement/setInt/)
- [setLong()](https://www.w3api.com/Java/PreparedStatement/setLong/)
- [setNCharacterStream()](https://www.w3api.com/Java/PreparedStatement/setNCharacterStream/)
- [setNClob()](https://www.w3api.com/Java/PreparedStatement/setNClob/)
- [setNString()](https://www.w3api.com/Java/PreparedStatement/setNString/)
- [setNull()](https://www.w3api.com/Java/PreparedStatement/setNull/)
- [setObject()](https://www.w3api.com/Java/PreparedStatement/setObject/)
- [setRef()](https://www.w3api.com/Java/PreparedStatement/setRef/)
- [setRowId()](https://www.w3api.com/Java/PreparedStatement/setRowId/)
- [setShort()](https://www.w3api.com/Java/PreparedStatement/setShort/)
- [setSQLXML()](https://www.w3api.com/Java/PreparedStatement/setSQLXML/)
- [setString()](https://www.w3api.com/Java/PreparedStatement/setString/)
- [setTime()](https://www.w3api.com/Java/PreparedStatement/setTime/)
- [setTimestamp()](https://www.w3api.com/Java/PreparedStatement/setTimestamp/)
- [setUnicodeStream()](https://www.w3api.com/Java/PreparedStatement/setUnicodeStream/)
- [setURL()](https://www.w3api.com/Java/PreparedStatement/setURL/)

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
