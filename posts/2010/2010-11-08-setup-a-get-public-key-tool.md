---
layout: layouts/post.njk
title: "Setup a 'Get Public Key' Tool"
date: "2010-11-08"
categories: 
  - "development"
tags: 
  - "microsoft"
  - "sharepoint"
  - "tools"
  - "visual-studio"
---

If you're a SharePoint developer, you've run into public key tokens but what you might not know is that Visual Studio comes with an executable that can make retrieving them a much easier process.

The following steps will add a "Get Public Key' option to your Tools menu in Visual Studio:

- Click 'Tools > External Tools'
- Click 'Add' and a new entry will appear
- In the 'Title' field type: Get Public Key
- Click the '...' button and navigate to the appropriate sn.exe
- If VS 2008: C:\\Program Files\\Microsoft SDKs\\Windows\\v6.0A\\Bin\\sn.exe
- If VS 2010\*: C:\\Program Files (x86)\\Microsoft SDKs\\Windows\\v7.0A\\Bin\\sn.exe
- In the 'Arguments' field type: -Tp "$(TargetPath)"
- Select 'Use Output window' checkbox
- Click 'OK'

<img src="../../../img/posts/2010/external-tools.png" alt="" class="img-fluid">

This will save you a ton of time if you are still using tools like Reflector to get the public key.

_\* This path is from a 64-bit version of Windows._
