---
title: HttpServlet.doPost()
permalink: /Java/HttpServlet/doPost/
date: 2023-04-25
key: Java.H.HttpServlet.doPost
category: Java
tags: [metodo java,javax.servlet.http]
sidebar:
  nav: java
---

## **Descripción**


Método que nos permite gestionar las peticiones de tipo HTTP POST dentro de un [Servlet](https://manualweb.net/javaee/introduccion-servlets/). El método `doPost` es muy útil para procesar la información enviada a través de formularios HTML. 


Al recibir una petición HTTP POST, el servlet puede obtener los datos enviados en el cuerpo de la petición y procesarlos para almacenarlos o realizar alguna otra acción. 


Permite recibir grandes cantidades de información y es muy útil cuando la información que queremos enviar es sensible y no queremos que sea visible como pasa cuando utilizamos el método HTTP GET.


## **Sintaxis**


```java
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
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
