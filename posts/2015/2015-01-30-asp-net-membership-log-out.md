---
layout: layouts/post.njk
title: "ASP.NET Membership Log Out"
date: "2015-01-30"
categories: 
  - "development"
tags: 
  - "dotnet"
  - "aspnet"
  - "code-snippet"
  - "security"
  - "web"
---

My boss likes to say "never use the words 'simple' or 'easy' in our line of work" and today was one of those days that demonstrates exactly why he loves this saying.

We were asked to setup an auto logout feature that redirects to the login screen. I've done so much Windows Authentication work that I've never actually had to build this functionality. I went straight to my favorite search engine and I found the following code.

``` csharp
FormsAuthentication.SignOut(); 
Session.Abandon(); 
FormsAuthentication.RedirectToLoginPage(); 
```

Everyone was commenting about how this worked great and lo and behold it wasn't working. More research and I found an article that explained that the above neglected to clear cookies sometimes and that to 100% ensure a sign out you should clear the forms authentication and session cookies.

The following code is what I ended up using in our application. It only expires the cookies that are forms authentication and session related.

``` csharp
FormsAuthentication.SignOut();
Session.Abandon();
 
var cookies = new List<string>
{
    "ASP.NET_SessionId", 
    FormsAuthentication.FormsCookieName, 
    ".ASPXROLES"
};
 
foreach (var cookie in cookies)
{
    if (Request.Cookies.AllKeys.Contains(cookie))
    {
        Request.Cookies[cookie].Expires = DateTime.Now.AddYears(-1);
    }
}
 
FormsAuthentication.RedirectToLoginPage();
```
