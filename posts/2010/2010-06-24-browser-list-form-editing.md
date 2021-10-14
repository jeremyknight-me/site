---
layout: layouts/post.njk
title: "Browser List Form Editing"
date: "2010-06-24"
categories: 
  - "development"
tags: 
  - "form"
  - "list"
  - "sharepoint"
  - "web-browser"
---

Want the ability to add web parts and edit a List's Form pages in the browser? SharePoint comes with a built in feature that in my opinion isn't advertised enough to developers. At the end of you List Form URL, simply add the query string `toolpaneview=2`. It will look like:

\[sourcecode language="text"\]http://yourSharePointUrl/Lists/ListName/ListFormView.aspx?toolpaneview=2\[/sourcecode\]

Where `ListFormView.aspx` is either `AllItems.aspx`, `NewForm.aspx`, `DispForm.aspx`, or `EditForm.aspx` using the default names.
