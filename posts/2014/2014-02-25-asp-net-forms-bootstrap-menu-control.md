---
layout: layouts/post.njk
title: "ASP.NET Forms Bootstrap Menu Control"
date: "2014-02-25"
categories: 
  - "development"
tags: 
  - "net"
  - "asp-net"
  - "asp-net-forms"
  - "bootstrap"
  - "code"
  - "html5"
  - "responsive"
---

**UPDATE: I have closed the comments for this post. If you'd like to discuss the ASP.NET Forms Bootstrap Menu Control, please visit the GitHub repository located at: [https://github.com/jeremyknight-me/aspnet-forms-bootstrap-menu](https://github.com/jeremyknight-me/aspnet-forms-bootstrap-menu)**

* * *

When I couldn't find an ASP.NET Form menu control that was compatible with Bootstrap 3.1, I did what every other developer would do: I created one. Enjoy!

Here's the HTML markup view:

\[sourcecode language="xml"\]
&amp;amp;lt;div class="navbar navbar-inverse navbar-static-top" role="navigation"&amp;amp;gt;
    &amp;amp;lt;div class="container" style="padding: 0; margin: 0;"&amp;amp;gt;
        &amp;amp;lt;div class="navbar-header"&amp;amp;gt;
            &amp;amp;lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"&amp;amp;gt;
                &amp;amp;lt;span class="sr-only"&amp;amp;gt;Toggle navigation&amp;amp;lt;/span&amp;amp;gt;
                &amp;amp;lt;span class="icon-bar"&amp;amp;gt;&amp;amp;lt;/span&amp;amp;gt;
                &amp;amp;lt;span class="icon-bar"&amp;amp;gt;&amp;amp;lt;/span&amp;amp;gt;
                &amp;amp;lt;span class="icon-bar"&amp;amp;gt;&amp;amp;lt;/span&amp;amp;gt;
            &amp;amp;lt;/button&amp;amp;gt;
        &amp;amp;lt;/div&amp;amp;gt;
        &amp;amp;lt;div class="navbar-collapse collapse"&amp;amp;gt;
            &amp;amp;lt;jk:BootstrapMenu ID="BootstrapMenu1" runat="server"&amp;amp;gt;
                &amp;amp;lt;Items&amp;amp;gt;
                    &amp;amp;lt;asp:MenuItem Text="Home" NavigateUrl="#" /&amp;amp;gt;
                    &amp;amp;lt;asp:MenuItem Text="About" NavigateUrl="#" /&amp;amp;gt;
                    &amp;amp;lt;asp:MenuItem Text="Contact" NavigateUrl="#" /&amp;amp;gt;
                    &amp;amp;lt;asp:MenuItem Text="Drop Down"&amp;amp;gt;
                        &amp;amp;lt;asp:MenuItem Text="Action" NavigateUrl="#" /&amp;amp;gt;
                        &amp;amp;lt;asp:MenuItem Text="Another action" NavigateUrl="#" /&amp;amp;gt;
                        &amp;amp;lt;asp:MenuItem Text="Something else here" NavigateUrl="#" /&amp;amp;gt;
                    &amp;amp;lt;/asp:MenuItem&amp;amp;gt;
                    &amp;amp;lt;asp:MenuItem Text="Help" NavigateUrl="#" /&amp;amp;gt;
                    &amp;amp;lt;asp:MenuItem Text="Nothing" /&amp;amp;gt;
                &amp;amp;lt;/Items&amp;amp;gt;
            &amp;amp;lt;/jk:BootstrapMenu&amp;amp;gt;
        &amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;!--/.nav-collapse --&amp;amp;gt;
    &amp;amp;lt;/div&amp;amp;gt;
&amp;amp;lt;/div&amp;amp;gt;
\[/sourcecode\]

Here's the HTML markup view for using with a SiteMapDataSource:

\[sourcecode language="xml"\]
&amp;amp;lt;div class="navbar navbar-inverse navbar-static-top" role="navigation"&amp;amp;gt;
    &amp;amp;lt;div class="container" style="padding: 0; margin: 0;"&amp;amp;gt;
        &amp;amp;lt;div class="navbar-header"&amp;amp;gt;
            &amp;amp;lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"&amp;amp;gt;
                &amp;amp;lt;span class="sr-only"&amp;amp;gt;Toggle navigation&amp;amp;lt;/span&amp;amp;gt;
                &amp;amp;lt;span class="icon-bar"&amp;amp;gt;&amp;amp;lt;/span&amp;amp;gt;
                &amp;amp;lt;span class="icon-bar"&amp;amp;gt;&amp;amp;lt;/span&amp;amp;gt;
                &amp;amp;lt;span class="icon-bar"&amp;amp;gt;&amp;amp;lt;/span&amp;amp;gt;
            &amp;amp;lt;/button&amp;amp;gt;
        &amp;amp;lt;/div&amp;amp;gt;
        &amp;amp;lt;div class="navbar-collapse collapse"&amp;amp;gt;
            &amp;amp;lt;jk:BootstrapMenu ID="BootstrapMenu2" runat="server" DataSourceId="SiteMapDataSource1" /&amp;amp;gt;
            &amp;amp;lt;asp:SiteMapDataSource ID="SiteMapDataSource1" runat="server" ShowStartingNode="False" /&amp;amp;gt;
        &amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;!--/.nav-collapse --&amp;amp;gt;
    &amp;amp;lt;/div&amp;amp;gt;
&amp;amp;lt;/div&amp;amp;gt;
\[/sourcecode\]

In either case you'll need a page directive

\[sourcecode language="xml"\]
&amp;amp;lt;%@ Register tagPrefix="jk" assembly="JK.Core.Web" namespace="JK.Core.Web.Controls" %&amp;amp;gt;
\[/sourcecode\]

Updates:

- 2017 January 23: Closed comments to push conversation to GitHub repository.
- 2015 January 19: Added zip file sample project for download to OneDrive.
- 2014 August 15: Added page directive needed to use control in page markup
- 2014 April 11: Updated to work with SiteMapDataSource
