---
title: HttpServlet.doGet()
permalink: /Java/HttpServlet/doGet/
date: 2023-04-25
key: Java.H.HttpServlet.doGet
category: Java
tags: [metodo java,javax.servlet.http]
sidebar:
  nav: java
---

## **Descripción**


El método `doGet` nos permite gestionar peticiones HTTP GET dentro de un Servlet. Los parámetros de una petición HTTP GET vienen dentro de la cadena de la URL como pares clave/valor.


## **Sintaxis**


```java
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
```


## **Parámetros**

- **req,** el objeto [`HttpServletRequest`](https://www.w3api.com/Java/HttpServletRequest/) que encapsula la petición HTTP que se recibe desde el cliente.
- **resp,** el objeto [`HttpServletResponse`](https://www.w3api.com/Java/HttpServletResponse/) que encapsula la respuesta HTTP que se va a enviar al cliente.

## **Excepciones**


[`ServletException`](https://www.w3api.com/Java/ServletException/), [`IOException`](https://www.w3api.com/Java/IOException/)


## **Clase Padre**


[`HttpServlet`](https://www.w3api.com/Java/HttpServlet/)


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


## Artículos

- [Mi primer servlet](https://lineadecodigo.com/java/mi-primer-servlet/)
