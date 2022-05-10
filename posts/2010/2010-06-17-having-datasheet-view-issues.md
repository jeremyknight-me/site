---
layout: layouts/post.njk
title: "Having Datasheet View Issues?"
date: "2010-06-17"
tags: 
  - "development"
  - "internet-explorer"
  - "microsoft"
  - "office"
  - "sharepoint"
  - "software"
  - "web-browser"
---

If you're using Office 64-bit and you're having issues with SharePoint's datasheet view, this post is for you.

Our team recently upgraded the software on our equipment and Office 2010 64-bit was our chosen Office version. Soon after, people started asking why the datasheet view was no longer working.  It just so happens that SharePoint's datasheet view doesn't play nice with 64-bit client software.

Why? The datasheet view uses a 32-bit ActiveX control. Internet Explorer 64-bit disables the datasheet view and without a 32-bit Office install IE 32-bit will give the following error:

<img src="../../../img/posts/2010/error.jpg" alt="" class="img-fluid">

Don't fret though. There will be no need to downgrade to a 32-bit version of Office. This problem can be fixed by installing the [2007 Office System Driver: Data Connectivity Components](http://www.microsoft.com/downloads/details.aspx?familyid=7554F536-8C28-4598-9B72-EF94E038C891&displaylang=en "2007 Office System Driver: Data Connectivity Components"). Once the downloaded AccessDatabaseEngine.exe is installed, the datasheet functionality should work in both SharePoint 2007 and SharePoint 2010.
