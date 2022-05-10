---
layout: layouts/post.njk
title: "Article: 10 Steps to Better SharePoint Development"
date: "2010-10-21"
tags: 
  - "development"
  - "dotnet"
  - "microsoft"
  - "sharepoint"
---

Save it. Print it. Do whatever you normally do to catalog your favorite articles but this article by David Mann isn't just a must read for SharePoint developers everywhere. This article can be used as a checklist or roadmap in any of your future SharePoint development.

[http://www.sharepointproconnections.com/article/sharepoint-development/10-Steps-to-Better-SharePoint-Development.aspx](http://www.sharepointproconnections.com/article/sharepoint-development/10-Steps-to-Better-SharePoint-Development.aspx "10 Steps to Better SharePoint Development")

I will clarify his point on unit testing though. We all know it can be done with expensive products but they aren't needed to get worthwhile coverage ratios. Steps 3 and 6 (Patterns and Refactoring) go a long way in making your SharePoint code more unit test friendly. The Patterns and Practice group he mentions have examples of SharePoint code using Repository, MVP, and Service Locator patterns. As you add each one of these to your code, you'll see it become more flexible and unit test friendly.

Also, his point on throwing exceptions doesn't mean run out and drop unnecessary try/catch blocks all over your code. If you're building a library and you find yourself with an empty catch block, you need to assess whether that try/catch is actually necessary or if you can just allow the error to bubble up.
