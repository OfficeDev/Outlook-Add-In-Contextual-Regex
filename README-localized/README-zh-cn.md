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
# Outlook 加载项：Contoso 订单编号

此示例加载项演示如何创建在邮件正文中检测到正则表达式匹配时激活的[上下文加载项](https://docs.microsoft.com/office/dev/add-ins/outlook/contextual-outlook-add-ins)。

该加载项会检测具有特定格式的虚构 Contoso 订单编号。使用的格式是 `CO-` 后跟 9 位数字。该加载项激活后直接显示所选订单编号和邮件中检测到的所有订单编号的列表。

> **注意：**获取所选订单编号依赖于一个在当前处于预览状态中的 API，因此该 API 可能并非在所有客户端中均可用。如果不可用，加载项将显示其不受支持。

## 先决条件

为了尝试此加载项，需要：

- Office 365：如果尚未安装 Office 365，可以[注册 1 个月免费试用版](http://office.microsoft.com/try/?WT%2Eintid1=ODC%5FENUS%5FFX101785584%5FXT104056786)。
- 受 SSL 保护的 Web 服务器：这可以是任何 Web 服务器，只要你的客户端信任其 SSL 证书即可。如果你没有 Web 服务器的访问权限，请参阅[在本地运行加载项](running-locally.md)，了解使用 Node.js 和 NPM 从命令行运行基本 Web 服务器的步骤。

## 配置加载项

1. 除非要在本地运行加载项，否则请将 HTML、CSS、JavaScript 和 PNG 文件从项目复制到 Web 服务器，并保持相同的目录布局。
1. 在文本编辑器中打开清单 (`contoso-order-number-manifest.xml`)，然后将 `https://localhost:8080` 的所有实例替换为上一步中将文件复制到的目录的 URL。
1. 验证是否可以使用浏览器从客户端浏览到清单中更新后的 URL。例如，应能够浏览到清单中的 `<bt:Url id="detectedEntityURL">` 元素中的 URL，并看到以下页面：

    ![在浏览器中加载的加载项 index.html 页面的屏幕截图](readme-images/browse-to-add-in.PNG)

## 旁加载加载项

按照[旁加载 Outlook 加载项进行测试](https://docs.microsoft.com/office/dev/add-ins/outlook/sideload-outlook-add-ins-for-testing)中的说明，旁加载 `contoso-order-number-manifest.xml` 文件。

## 尝试一下

1. 打开 [Outlook 网页版](https://outlook.office.com)。
1. 向你自己发送一封在正文中包含 Contoso 订单编号的邮件。例如：

    ```text
    Thanks for your order! Your order number is CO-123456789.
    ```

1. 当邮件到达你的收件箱时，将其打开。订单编号应该会突出显示。单击订单编号即可打开加载项。

    ![在 Outlook 网页版中激活的加载项的屏幕截图](readme-images/add-in-activated.PNG)

## 参与

本项目欢迎供稿和建议。
大多数的供稿都要求你同意“参与者许可协议 (CLA)”，声明你有权并确定授予我们使用你所供内容的权利。
有关详细信息，请访问 https://cla.microsoft.com。

在提交拉取请求时，CLA 机器人会自动确定你是否需要提供 CLA 并适当地修饰 PR（例如标记、批注）。
只需按照机器人提供的说明操作即可。
只需在所有存储库上使用我们的 CLA 执行此操作一次。

此项目已采用 [Microsoft 开放源代码行为准则](https://opensource.microsoft.com/codeofconduct/)。
有关详细信息，请参阅[行为准则常见问题解答](https://opensource.microsoft.com/codeofconduct/faq/)。
如有其他任何问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。

## 版权信息

版权所有 (c) Microsoft。保留所有权利。
