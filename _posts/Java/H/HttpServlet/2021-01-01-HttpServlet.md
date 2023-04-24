---
title: HttpServlet
permalink: /Java/HttpServlet/
date: 2023-04-24
key: Java.H.HttpServlet
category: Java
tags: [clase java,java ee,javax.servlet.http]
sidebar:
  nav: java
---

## **Descripción**


La clase `HttpServlet` es una clase abstracta que nos sirve para poder crear un **Servlet HTTP**. Este servlet nos permitirá controlar y manejar las solicitudes HTTP entrantes y las respuestas HTTP salientes. 


## **Sintaxis**


```java
public abstract class HttpServlet extends GenericServlet
```


## **Constructores**

- HttpServlet()

## **Métodos**

- doDelete()
- doGet()
- doHead()
- doOptions()
- doPost()
- doPut()
- doTrace()
- getLastModified()
- service()

## **Ejemplo**


```java
public class MiPrimerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public MiPrimerServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out;
		out = response.getWriter();

		response.setContentType("text/html");
	
		out.println("<html>");
		out.println("<head><title>Mi Primer Servlet </title></head>");
		out.println("<body>");
		out.println("<h1>Este es mi Primer Servlet</h1>");			
		out.println(WebInfo.pageURL(getServletContext(), "mi-primer-servlet"));			
		out.println("</body></html>");  
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request,response);
	}

}
```


## **Líneas de Código**

- [Mi primer servlet](https://lineadecodigo.com/java/mi-primer-servlet/)
