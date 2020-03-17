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
# Outlook アドイン:Contoso の注文番号

このサンプル アドインは、メッセージ本文において正規表現の一致が検出されるとアクティブ化する[コンテキスト アドイン](https://docs.microsoft.com/en-us/outlook/add-ins/contextual-outlook-add-ins)を作成する方法を示します。

このアドインは、特定の形式を持った架空の Contoso の注文番号を検出します。使用される形式は、`CO-` とそれに続く 9 桁の数字です。有効にすると、アドインは選択された注文番号、およびメッセージ内で検出されたすべての注文番号の一覧の両方をシンプルに表示します。

> **注:**選択された注文番号の取得は、現在プレビュー中の API に依存しているため、一部のクライアントでは使用できない可能性があります。その場合、アドインはサポートされていないことを示します。

## 前提条件

このアドインを試すには、以下のものが必要になります。

- Office 365:まだ Office 365 を所持していない場合は、[1 か月間無料試用版の登録](http://office.microsoft.com/en-us/try/?WT%2Eintid1=ODC%5FENUS%5FFX101785584%5FXT104056786)が可能です。
- SSL で保護された Web サーバー:これには、クライアントが信頼する SSL 証明書を持った任意の Web サーバーを指定することができます。Web サーバーにアクセスできない場合、Node.js および NPM を使用してコマンドラインから基本的な Web サーバーを実行する手順について、「[ローカルでアドインを実行する](running-locally.md)」を参照してください。

## アドインを構成する

1. アドインをローカルで実行する場合を除き、HTML、CSS、JavaScript、および PNG ファイルをプロジェクトから Web サーバーにコピーし、同じディレクトリ レイアウトを維持します。
1. テキスト エディタでマニフェスト (`contoso-order-number-manifest.xml`) を開き、`https://localhost:8080` のすべてのインスタンスを、前述の手順でファイルをコピーしたディレクトリへの URL に置き換えます。
1. ブラウザーを使用して、クライアントからマニフェスト内の更新された URL を参照できることを確認します。たとえば、マニフェストの `<bt:Url id="detectedEntityURL">` 要素の URL を参照して、次のページを表示できる必要があります。

    ![ブラウザーに読み込まれた、アドインの index.html ページのスクリーンショット](readme-images/browse-to-add-in.PNG)

## アドインをサイドロードする

「[テスト用に Outlook アドインをサイドロードする](https://docs.microsoft.com/en-us/outlook/add-ins/sideload-outlook-add-ins-for-testing)」の手順に従って `contoso-order-number-manifest.xml` ファイルをサイドロードします。

## 試してみる

1. [Outlook on the web](https://outlook.office.com) を開きます。
1. 本文に Contoso の注文番号を記載したメッセージを自分自身に送信します。次に例を示します。

    ```
    Thanks for your order! Your order number is CO-123456789.
    ```
1. メッセージが受信トレイに届いたら、それを開きます。注文番号が強調表示されているはずです。注文番号をクリックして、アドインを開きます。

    ![Outlook on the web でアクティブ化されたアドインのスクリーンショット。](readme-images/add-in-activated.PNG)

## 投稿

このプロジェクトは投稿や提案を歓迎します。
たいていの投稿には、投稿者のライセンス契約 (CLA) に同意することにより、投稿内容を使用する権利を Microsoft に付与する権利が自分にあり、実際に付与する旨を宣言していただく必要があります。
詳細については、https://cla.microsoft.com をご覧ください。

プル要求を送信すると、CLA を提供して PR を適切に修飾する (ラベル、コメントなど) 必要があるかどうかを CLA ボットが自動的に判断します。
ボットの指示に従ってください。
すべてのリポジトリに対して 1 度のみ、CLA を使用してこれを行う必要があります。

このプロジェクトでは、[Microsoft Open Source Code of Conduct (Microsoft オープン ソース倫理規定)](https://opensource.microsoft.com/codeofconduct/)
が採用されています。詳細については、「[倫理規定の FAQ](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。
また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。

## 著作権

Copyright (c) Microsoft.All rights reserved.