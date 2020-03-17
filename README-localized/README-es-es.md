---
page_type: sample
products:
- office-365
- office-outlook
languages:
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: 1/11/2018 1:18:43 PM
---
# Complemento de Outlook: Número de pedido de Contoso

Este complemento de ejemplo muestra cómo crear un [complemento contextual](https://docs.microsoft.com/en-us/outlook/add-ins/contextual-outlook-add-ins) que se activa cuando se detecta una coincidencia de expresión regular en el cuerpo de un mensaje.

El complemento detecta números de pedido ficticios de Contoso con un formato específico. El formato utilizado es `CO-` seguido de 9 dígitos. Cuando se activa, el complemento muestra el número de pedido seleccionado y una lista de todos los números de pedido detectados en el mensaje.

> **Nota:** La obtención del número de pedido seleccionado se basa en una API que está actualmente en versión preliminar, por lo que es posible que no esté disponible en todos los clientes. Si no lo está, el complemento indicará que no es compatible.

## Requisitos previos

Para probar este complemento, necesitará:

- Office 365: Si todavía no tiene Office 365, puede [registrarse para obtener una prueba gratuita de 1 mes](http://office.microsoft.com/en-us/try/?WT%2Eintid1=ODC%5FENUS%5FFX101785584%5FXT104056786).
- Un servidor web protegido por SSL: Puede ser cualquier servidor web con un certificado SSL de confianza para el cliente. Si no tiene acceso a un servidor web, consulte [Ejecutar el complemento de forma local](running-locally.md) para ver los pasos para ejecutar un servidor web básico desde la línea de comandos con Node.js y NPM.

## Configurar el complemento

1. A menos que vaya a ejecutar el complemento de forma local, copie los archivos HTML, CSS, JavaScript y PNG del proyecto en el servidor web, manteniendo el mismo esquema de directorio.
1. Abra el manifiesto (`contoso-order-number-manifest.xml`) en un editor de texto y reemplace todas las instancias de `https://localhost:8080` con la dirección URL del directorio donde copió los archivos en el paso anterior.
1. Compruebe que puede ir a las direcciones URL actualizadas en el manifiesto desde el cliente con un explorador. Por ejemplo, debería poder buscar la dirección URL en el elemento `<bt:Url id="detectedEntityURL">` en el manifiesto y ver la página siguiente:

    ![Una captura de pantalla de la página index.html del complemento cargada en un explorador](readme-images/browse-to-add-in.PNG)

## Transferir el complemento localmente

Siga las instrucciones que encontrará en [Transferir localmente complementos de Outlook para pruebas](https://docs.microsoft.com/en-us/outlook/add-ins/sideload-outlook-add-ins-for-testing) para transferir el archivo `contoso-order-number-manifest.xml`.

## Pruébelo

1. Abra [Outlook en la Web](https://outlook.office.com).
1. Envíese un mensaje con un número de pedido de Contoso en el cuerpo. Por ejemplo:

    ```
    Thanks for your order! Your order number is CO-123456789.
    ```
1. Cuando llegue el mensaje a su bandeja de entrada, ábralo. El número de pedido debería aparecer resaltado. Haga clic en el número de pedido para abrir el complemento.

    ![Una captura de pantalla del complemento activado en Outlook en la Web](readme-images/add-in-activated.PNG)

## Colaboradores

Este proyecto recibe las contribuciones y las sugerencias.
La mayoría de las contribuciones necesitan un contrato de licencia de colaboración (CLA) que declare que tiene el derecho, y realmente lo tiene, de otorgarnos los derechos para usar su contribución.
Para obtener más información, visite https://cla.microsoft.com.

Cuando envíe una solicitud de incorporación de cambios, un bot de CLA determinará automáticamente si necesita proporcionar un CLA y decorar PR correctamente (por ejemplo, etiqueta, comentario).
Siga las instrucciones proporcionadas por el bot.
Solo debe hacerlo una vez en todos los repos que usen nuestro CLA.

Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/).
Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/)
o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.

## Copyright

Copyright (c) Microsoft. Todos los derechos reservados.