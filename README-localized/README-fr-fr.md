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
# Complément Outlook : Numéro de commande Contoso

Cet exemple de complément présente comment créer un [complément contextuel](https://docs.microsoft.com/en-us/outlook/add-ins/contextual-outlook-add-ins) qui s’active lorsqu’une correspondance d’expression régulière est détectée dans le corps d’un message.

Le complément détecte les numéros de commande Contoso fictifs ayant un format spécifique. Le format utilisé est `CO-` suivi de 9 chiffres. Lorsqu’il est activé, le complément affiche simplement le numéro de commande sélectionné et une liste de tous les numéros de commande détectés dans le message.

> **Remarque :** L’acquisition du numéro de commande sélectionné s’appuie sur une API actuellement en version preview. Il est donc possible qu’elle ne soit pas disponible chez tous les clients. En cas d'indisponibilité, le complément indique qu’il n’est pas pris en charge.

## Conditions préalables

Pour exécuter ce complément, vous devez avoir :

- Office 365 : Si vous n’avez pas encore Office 365, vous pouvez vous [inscrire pour obtenir une version d’évaluation gratuite d’un mois](http://office.microsoft.com/en-us/try/?WT%2Eintid1=ODC%5FENUS%5FFX101785584%5FXT104056786).
- Un serveur web protégé par SSL : Il peut s’agir de n'importe quel serveur web disposant d’un certificat SSL approuvé par votre client. Si vous n’avez pas accès à un serveur web, voir l'[Exécution du complément localement](running-locally.md) pour connaître la procédure d’exécution d’un serveur web de base à partir de la ligne de commande utilisatn Node.js et NPM.

## Configurer le complément

1. Sauf si vous exécutez le complément de façon locale, copiez les fichiers HTML, CSS, JavaScript et PNG à partir du projet vers votre serveur web, en conservant la même disposition de répertoire.
1. Ouvrez le fichier manifeste (`contoso-order-number-manifest.xml`) dans un éditeur de texte et remplacez toutes les instances de `https://localhost:8080` par l’URL du répertoire dans lequel vous avez copié les fichiers à l’étape précédente.
1. Vérifiez que vous pouvez accéder aux URL mises à jour dans votre manifeste à partir de votre client en utilisant un navigateur. Par exemple, vous devez être en mesure d’accéder à l’URL de l'élément `<bt:Url id="detectedEntityURL">` dans le manifeste et voir la page suivante :

    ![Capture d’écran de la page index.html du complément chargée dans un navigateur](readme-images/browse-to-add-in.PNG)

## Charger une version test du complément

Suivez les instructions indiquées dans l’article [Chargement de version test des compléments Outlook](https://docs.microsoft.com/en-us/outlook/add-ins/sideload-outlook-add-ins-for-testing) pour charger le fichier `contoso-order-number-manifest.xml`.

## Faites un essai

1. Ouvrez [Outlook sur le web](https://outlook.office.com).
1. Envoyez-vous un message avec un numéro de commande Contoso dans le corps du message. Par exemple :

    ```
    Thanks for your order! Your order number is CO-123456789.
    ```
1. Ouvrez le message lorsqu'il arrive dans votre boîte aux lettres. Le numéro de commande doit être mis en surbrillance. Cliquez sur le numéro de commande pour ouvrir le complément.

    ![Capture d'écran d'un complément validé dans Outlook sur le web](readme-images/add-in-activated.PNG)

## Contribution

Ce projet autorise les contributions et les suggestions.
Pour la plupart des contributions, vous devez accepter le contrat de licence de contributeur (CLA, Contributor License Agreement) stipulant que vous êtes en mesure, et que vous vous y engagez, de nous accorder les droits d’utiliser votre contribution.
Pour plus d’informations, visitez https://cla.microsoft.com.

Lorsque vous soumettez une demande de tirage, un robot CLA détermine automatiquement si vous devez fournir un CLA et si vous devez remplir la demande de tirage appropriée (par exemple, étiquette, commentaire).
Suivez simplement les instructions données par le robot.
Vous ne devrez le faire qu’une seule fois au sein de tous les référentiels en utilisant le CLA.

Ce projet a adopté le [Code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/).
Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/)
ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.

## Copyright

Copyright (c) Microsoft. Tous droits réservés.