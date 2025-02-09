---
title: Resultset
permalink: /Java/ResultSet/
excerpt: "El interface ResultSet permite manejar resultados de consultas SQL en Java."
date: 2025-02-09
last_modified_at: 2025-02-09
key: Java.R.ResultSet
category: Java
tags: [interface java,java 1.1,java se,java.sql,java.sql]
image: "/assets/images/java.png"
sidebar:
  nav: java
---

## **Descripción**


El interface `ResultSet` en [Java](https://www.manualweb.net/java/) es una interfaz que nos permite manejar los resultados de una consulta [SQL](https://www.manualweb.net/sql/). Esta interfaz nos proporciona métodos para navegar por los resultados, así como para leer y modificar los datos obtenidos. El `ResultSet` mantiene un cursor que apunta a la fila actual de datos.


## **Sintaxis**


```java
public interface ResultSet extends Wrapper, AutoCloseable
```


## **Campos**

- [CLOSE_CURSORS_AT_COMMIT](https://w3api.com/Java/ResultSet/CLOSE_CURSORS_AT_COMMIT)
- [CONCUR_READ_ONLY](https://w3api.com/Java/ResultSet/CONCUR_READ_ONLY)
- [CONCUR_UPDATABLE](https://w3api.com/Java/ResultSet/CONCUR_UPDATABLE)
- [FETCH_FORWARD](https://w3api.com/Java/ResultSet/FETCH_FORWARD)
- [FETCH_REVERSE](https://w3api.com/Java/ResultSet/FETCH_REVERSE)
- [FETCH_UNKNOWN](https://w3api.com/Java/ResultSet/FETCH_UNKNOWN)
- [HOLD_CURSORS_OVER_COMMIT](https://w3api.com/Java/ResultSet/HOLD_CURSORS_OVER_COMMIT)
- [TYPE_FORWARD_ONLY](https://w3api.com/Java/ResultSet/TYPE_FORWARD_ONLY)
- [TYPE_SCROLL_INSENSITIVE](https://w3api.com/Java/ResultSet/TYPE_SCROLL_INSENSITIVE)
- [TYPE_SCROLL_SENSITIVE](https://w3api.com/Java/ResultSet/TYPE_SCROLL_SENSITIVE)

## **Métodos**

- [absolute()](https://w3api.com/Java/ResultSet/absolute)
- [afterLast()](https://w3api.com/Java/ResultSet/afterLast)
- [beforeFirst()](https://w3api.com/Java/ResultSet/beforeFirst)
- [cancelRowUpdates()](https://w3api.com/Java/ResultSet/cancelRowUpdates)
- [clearWarnings()](https://w3api.com/Java/ResultSet/clearWarnings)
- [close()](https://w3api.com/Java/ResultSet/close)
- [deleteRow()](https://w3api.com/Java/ResultSet/deleteRow)
- [findColumn()](https://w3api.com/Java/ResultSet/findColumn)
- [first()](https://w3api.com/Java/ResultSet/first)
- [getArray()](https://w3api.com/Java/ResultSet/getArray)
- [getAsciiStream()](https://w3api.com/Java/ResultSet/getAsciiStream)
- [getBigDecimal()](https://w3api.com/Java/ResultSet/getBigDecimal)
- [getBinaryStream()](https://w3api.com/Java/ResultSet/getBinaryStream)
- [getBlob()](https://w3api.com/Java/ResultSet/getBlob)
- [getBoolean()](https://w3api.com/Java/ResultSet/getBoolean)
- [getByte()](https://w3api.com/Java/ResultSet/getByte)
- [getBytes()](https://w3api.com/Java/ResultSet/getBytes)
- [getCharacterStream()](https://w3api.com/Java/ResultSet/getCharacterStream)
- [getClob()](https://w3api.com/Java/ResultSet/getClob)
- [getConcurrency()](https://w3api.com/Java/ResultSet/getConcurrency)
- [getCursorName()](https://w3api.com/Java/ResultSet/getCursorName)
- [getDate()](https://w3api.com/Java/ResultSet/getDate)
- [getDouble()](https://w3api.com/Java/ResultSet/getDouble)
- [getFetchDirection()](https://w3api.com/Java/ResultSet/getFetchDirection)
- [getFetchSize()](https://w3api.com/Java/ResultSet/getFetchSize)
- [getFloat()](https://w3api.com/Java/ResultSet/getFloat)
- [getHoldability()](https://w3api.com/Java/ResultSet/getHoldability)
- [getInt()](https://w3api.com/Java/ResultSet/getInt)
- [getLong()](https://w3api.com/Java/ResultSet/getLong)
- [getMetaData()](https://w3api.com/Java/ResultSet/getMetaData)
- [getNCharacterStream()](https://w3api.com/Java/ResultSet/getNCharacterStream)
- [getNClob()](https://w3api.com/Java/ResultSet/getNClob)
- [getNString()](https://w3api.com/Java/ResultSet/getNString)
- [getObject()](https://w3api.com/Java/ResultSet/getObject)
- [getRef()](https://w3api.com/Java/ResultSet/getRef)
- [getRow()](https://w3api.com/Java/ResultSet/getRow)
- [getRowId()](https://w3api.com/Java/ResultSet/getRowId)
- [getShort()](https://w3api.com/Java/ResultSet/getShort)
- [getSQLXML()](https://w3api.com/Java/ResultSet/getSQLXML)
- [getStatement()](https://w3api.com/Java/ResultSet/getStatement)
- [getString()](https://w3api.com/Java/ResultSet/getString)
- [getTime()](https://w3api.com/Java/ResultSet/getTime)
- [getTimestamp()](https://w3api.com/Java/ResultSet/getTimestamp)
- [getType()](https://w3api.com/Java/ResultSet/getType)
- [getUnicodeStream()](https://w3api.com/Java/ResultSet/getUnicodeStream)
- [getURL()](https://w3api.com/Java/ResultSet/getURL)
- [getWarnings()](https://w3api.com/Java/ResultSet/getWarnings)
- [insertRow()](https://w3api.com/Java/ResultSet/insertRow)
- [isAfterLast()](https://w3api.com/Java/ResultSet/isAfterLast)
- [isBeforeFirst()](https://w3api.com/Java/ResultSet/isBeforeFirst)
- [isClosed()](https://w3api.com/Java/ResultSet/isClosed)
- [isFirst()](https://w3api.com/Java/ResultSet/isFirst)
- [isLast()](https://w3api.com/Java/ResultSet/isLast)
- [last()](https://w3api.com/Java/ResultSet/last)
- [moveToCurrentRow()](https://w3api.com/Java/ResultSet/moveToCurrentRow)
- [moveToInsertRow()](https://w3api.com/Java/ResultSet/moveToInsertRow)
- [next()](https://w3api.com/Java/ResultSet/next)
- [previous()](https://w3api.com/Java/ResultSet/previous)
- [refreshRow()](https://w3api.com/Java/ResultSet/refreshRow)
- [relative()](https://w3api.com/Java/ResultSet/relative)
- [rowDeleted()](https://w3api.com/Java/ResultSet/rowDeleted)
- [rowInserted()](https://w3api.com/Java/ResultSet/rowInserted)
- [rowUpdated()](https://w3api.com/Java/ResultSet/rowUpdated)
- [setFetchDirection()](https://w3api.com/Java/ResultSet/setFetchDirection)
- [setFetchSize()](https://w3api.com/Java/ResultSet/setFetchSize)
- [updateArray()](https://w3api.com/Java/ResultSet/updateArray)
- [updateAsciiStream()](https://w3api.com/Java/ResultSet/updateAsciiStream)
- [updateBigDecimal()](https://w3api.com/Java/ResultSet/updateBigDecimal)
- [updateBinaryStream()](https://w3api.com/Java/ResultSet/updateBinaryStream)
- [updateBlob()](https://w3api.com/Java/ResultSet/updateBlob)
- [updateBoolean()](https://w3api.com/Java/ResultSet/updateBoolean)
- [updateByte()](https://w3api.com/Java/ResultSet/updateByte)
- [updateBytes()](https://w3api.com/Java/ResultSet/updateBytes)
- [updateCharacterStream()](https://w3api.com/Java/ResultSet/updateCharacterStream)
- [updateClob()](https://w3api.com/Java/ResultSet/updateClob)
- [updateDate()](https://w3api.com/Java/ResultSet/updateDate)
- [updateDouble()](https://w3api.com/Java/ResultSet/updateDouble)
- [updateFloat()](https://w3api.com/Java/ResultSet/updateFloat)
- [updateInt()](https://w3api.com/Java/ResultSet/updateInt)
- [updateLong()](https://w3api.com/Java/ResultSet/updateLong)
- [updateNCharacterStream()](https://w3api.com/Java/ResultSet/updateNCharacterStream)
- [updateNClob()](https://w3api.com/Java/ResultSet/updateNClob)
- [updateNString()](https://w3api.com/Java/ResultSet/updateNString)
- [updateNull()](https://w3api.com/Java/ResultSet/updateNull)
- [updateObject()](https://w3api.com/Java/ResultSet/updateObject)
- [updateRef()](https://w3api.com/Java/ResultSet/updateRef)
- [updateRow()](https://w3api.com/Java/ResultSet/updateRow)
- [updateRowId()](https://w3api.com/Java/ResultSet/updateRowId)
- [updateShort()](https://w3api.com/Java/ResultSet/updateShort)
- [updateSQLXML()](https://w3api.com/Java/ResultSet/updateSQLXML)
- [updateString()](https://w3api.com/Java/ResultSet/updateString)
- [updateTime()](https://w3api.com/Java/ResultSet/updateTime)
- [updateTimestamp()](https://w3api.com/Java/ResultSet/updateTimestamp)
- [wasNull()](https://w3api.com/Java/ResultSet/wasNull)

## **Ejemplo**


```java
PreparedStatement stmt = null;
ResultSet rs = null;

stmt = con.prepareStatement("SELECT * FROM personas");
rs = stmt.executeQuery();

while(rs.next()) {
   for (int x=1;x<=rs.getMetaData().getColumnCount();x++)
     System.out.print(rs.getString(x)+ "\t");
   
   System.out.println("");
}
```


## Artículos

- [Conectar MySQL con Java](https://lineadecodigo.com/java/conectar-mysql-java/)
