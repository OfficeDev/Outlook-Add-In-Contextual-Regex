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
# Suplemento do Outlook: Número do pedido da Contoso

Este exemplo de suplemento demonstra como criar um [suplemento contextual](https://docs.microsoft.com/office/dev/add-ins/outlook/contextual-outlook-add-ins) que é ativado quando uma correspondência de expressão regular é detectada no corpo de uma mensagem.

O suplemento detecta números de pedido da Contoso fictícios com um formato específico. O formato usado é `CO-` seguido de 9 dígitos. Quando ativado, o suplemento simplesmente exibe o número do pedido selecionado e uma lista de todos os números de pedido detectados na mensagem.

> **Observação:** Obter o número do pedido selecionado depende de uma API no momento na visualização, pode ser que ela não esteja disponível em todos os clientes. Caso contrário, o suplemento indicará que não tem suporte.

## Pré-requisitos

Para experimentar esse suplemento, você precisará do seguinte:

- Office 365: Se você ainda não tem o Office 365, [registre-se para fazer uma avaliação gratuita de um mês](http://office.microsoft.com/try/?WT%2Eintid1=ODC%5FENUS%5FFX101785584%5FXT104056786).
- Um servidor Web protegido por SSL: Pode ser qualquer servidor Web com um certificado SSL confiável para seu cliente. Se você não tiver acesso a um servidor Web, consulte [executar o suplemento localmente](running-locally.md) para ver as etapas para executar um servidor Web básico a partir da linha de comando usando o Node.js e o NPM.

## Configurar o suplemento

1. A menos que você vá executar o suplemento localmente, copie os arquivos HTML, CSS, JavaScript e PNG do projeto para seu servidor Web, mantendo o mesmo layout de diretório.
1. Abra o manifesto (`contoso-Order-Number-manifest. xml`) em um editor de texto e substitua todas as instâncias de `https://localhost:8080` com a URL para o diretório onde você copiou os arquivos na etapa anterior.
1. Verifique se você consegue procurar as URLs atualizadas no seu manifesto usando um navegador. Por exemplo, você deve ser capaz de navegar até a URL no elemento `< BT: ID da URL = "detectedEntityURL" >` no manifesto e ver a seguinte página:

    ![Uma captura de tela do índice do suplemento index.html carregada em um navegador](readme-images/browse-to-add-in.PNG)

## Realizar o sideload do suplemento

Siga as instruções em [Sideload de suplementos do Outlook para testar](https://docs.microsoft.com/office/dev/add-ins/outlook/sideload-outlook-add-ins-for-testing) para fazer o sideload do arquivo `contoso-Order-Number-manifest.xml`.

## Experimente

1. Abra o [Outlook na Web](https://outlook.office.com).
1. Envie uma mensagem com um número de pedido da Contoso no corpo. Por exemplo:

    ```text
    Thanks for your order! Your order number is CO-123456789.
    ```

1. Quando a mensagem chegar na caixa de entrada, abra-a. O número do pedido deve ser realçado. Clique no número do pedido para abrir o suplemento.

    ![Uma captura de tela do suplemento ativado no Outlook na Web](readme-images/add-in-activated.PNG)

## Colaboração

Este projeto recebe e agradece as contribuições e sugestões.
A maioria das contribuições exige que você concorde com um CLA (Contrato de Licença de Contribuinte) declarando que você tem o direito e realmente nos concede os direitos de usar sua contribuição.
Para saber mais, acesse https://cla.microsoft.com.

Quando você envia uma solicitação de pull, um bot de CLA determina automaticamente se você precisa fornecer um CLA e decora o PR adequadamente (por exemplo, rótulo, comentário).
Basta seguir as instruções fornecidas pelo bot.
Você só precisa fazer isso uma vez em todos os repositórios que usam nosso CLA.

Este projeto adotou o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/).
Para saber mais, confira as [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/)
ou entre em contato pelo [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.

## Direitos autorais

Copyright (c) Microsoft. Todos os direitos reservados.
