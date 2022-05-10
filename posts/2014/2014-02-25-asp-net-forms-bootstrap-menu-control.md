---
layout: layouts/post.njk
title: "ASP.NET Forms Bootstrap Menu Control"
date: "2014-02-25"  
tags: 
  - "development"
  - "dotnet"
  - "aspnet"
  - "aspnet-forms"
  - "bootstrap"
  - "code"
  - "html5"
  - "responsive"
---

**UPDATE: I have closed the comments for this post. If you'd like to discuss the ASP.NET Forms Bootstrap Menu Control, please visit the GitHub repository located at: [https://github.com/jeremyknight-me/aspnet-forms-bootstrap-menu](https://github.com/jeremyknight-me/aspnet-forms-bootstrap-menu)**

* * *

When I couldn't find an ASP.NET Form menu control that was compatible with Bootstrap 3.1, I did what every other developer would do: I created one. Enjoy!

Here's the HTML markup view:

``` aspnet
<div class="navbar navbar-inverse navbar-static-top" role="navigation">
    <div class="container" style="padding: 0; margin: 0;">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse">
            <jk:BootstrapMenu ID="BootstrapMenu1" runat="server" HighlightActive="True">
                <Items>
                    <asp:MenuItem Text="Link" NavigateUrl="#" />
                    <asp:MenuItem Text="Link" NavigateUrl="#" />
                    <asp:MenuItem Text="Drop Down">
                        <asp:MenuItem Text="Link" NavigateUrl="#" />
                        <asp:MenuItem Text="Link" NavigateUrl="#" />
                        <asp:MenuItem Text="Link" NavigateUrl="#" />
                    </asp:MenuItem>
                    <asp:MenuItem Text="Link" NavigateUrl="#" />
                    <asp:MenuItem Text="Nothing" />
                </Items>
            </jk:BootstrapMenu>
        </div><!--/.nav-collapse -->
    </div>
</div>
```

Here's the HTML markup view for using with a SiteMapDataSource:

``` aspnet
<div class="navbar navbar-inverse navbar-static-top" role="navigation">
    <div class="container" style="padding: 0; margin: 0;">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse">
            <jk:BootstrapMenu ID="BootstrapMenu2" runat="server" DataSourceId="SiteMapDataSource1" />
            <asp:SiteMapDataSource ID="SiteMapDataSource1" runat="server" ShowStartingNode="False" />
        </div><!--/.nav-collapse -->
    </div>
</div>
```

In either case you'll need a page directive

``` aspnet
<%@ Register TagPrefix="jk" Namespace="JK.BootstrapControls" Assembly="JK.BootstrapControls" %>
```

Updates:

- 2017 January 23: Closed comments to push conversation to GitHub repository.
- 2015 January 19: Added zip file sample project for download to OneDrive.
- 2014 August 15: Added page directive needed to use control in page markup
- 2014 April 11: Updated to work with SiteMapDataSource
