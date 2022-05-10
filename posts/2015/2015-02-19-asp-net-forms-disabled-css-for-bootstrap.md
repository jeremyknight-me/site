---
layout: layouts/post.njk
title: "ASP.NET Forms Disabled CSS for BootStrap"
date: "2015-02-19"  
tags: 
  - "aspnet"
  - "bootstrap"
  - "code-snippet"
  - "css"
  - "development"
  - "web"
---

The following CSS is to handle [Enabled](https://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.webcontrol.enabled(v=vs.110).aspx "WebControl.Enabled Property on MSDN") set to true in any [WebControl](https://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.webcontrol(v=vs.110).aspx "WebControl Class on MSDN").

``` css
/* -- Bootstrap Additions - ASP.NET Disabled ----------------- */

input[type="radio"].aspNetDisabled,
input[type="checkbox"].aspNetDisabled,
.radio-inline.aspNetDisabled,
.checkbox-inline.aspNetDisabled,
.radio.aspNetDisabled label,
.checkbox.aspNetDisabled label
{
    cursor: not-allowed;
}
 
.btn.aspNetDisabled
{
    pointer-events: none;
    cursor: not-allowed;
    filter: alpha(opacity=65);
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: .65;
}
 
.btn-default.aspNetDisabled,
.btn-default.aspNetDisabled:hover,
.btn-default.aspNetDisabled:focus,
.btn-default.aspNetDisabled:active,
.btn-default.aspNetDisabled.active
{
    background-color: #fff;
    border-color: #ccc;
}
 
.btn-primary.aspNetDisabled,
.btn-primary.aspNetDisabled:hover,
.btn-primary.aspNetDisabled:focus,
.btn-primary.aspNetDisabled:active,
.btn-primary.aspNetDisabled.active
{
    background-color: #428bca;
    border-color: #357ebd;
}
 
.btn-success.aspNetDisabled,
.btn-success.aspNetDisabled:hover,
.btn-success.aspNetDisabled:focus,
.btn-success.aspNetDisabled:active,
.btn-success.aspNetDisabled.active
{
    background-color: #5cb85c;
    border-color: #4cae4c;
}
 
.btn-info.aspNetDisabled,
.btn-info.aspNetDisabled:hover,
.btn-info.aspNetDisabled:focus,
.btn-info.aspNetDisabled:active,
.btn-info.aspNetDisabled.active
{
    background-color: #5bc0de;
    border-color: #46b8da;
}
 
.btn-warning.aspNetDisabled,
.btn-warning.aspNetDisabled:hover,
.btn-warning.aspNetDisabled:focus,
.btn-warning.aspNetDisabled:active,
.btn-warning.aspNetDisabled.active
{
    background-color: #f0ad4e;
    border-color: #eea236;
}
 
.btn-danger.aspNetDisabled,
.btn-danger.aspNetDisabled:hover,
.btn-danger.aspNetDisabled:focus,
.btn-danger.aspNetDisabled:active,
.btn-danger.aspNetDisabled.active
{
    background-color: #d9534f;
    border-color: #d43f3a;
}
 
.dropdown-menu > .aspNetDisabled > a,
.dropdown-menu > .aspNetDisabled > a:hover,
.dropdown-menu > .aspNetDisabled > a:focus,
.dropdown-menu > li > a.aspNetDisabled,
.dropdown-menu > li > a.aspNetDisabled:hover,
.dropdown-menu > li > a.aspNetDisabled:focus
{
    color: #777;
}
 
.dropdown-menu > .aspNetDisabled > a:hover,
.dropdown-menu > .aspNetDisabled > a:focus,
.dropdown-menu > li > a.aspNetDisabled:hover,
.dropdown-menu > li > a.aspNetDisabled:focus
{
    text-decoration: none;
    cursor: not-allowed;
    background-color: transparent;
    background-image: none;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}
```
