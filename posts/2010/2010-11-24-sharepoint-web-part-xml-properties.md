---
layout: layouts/post.njk
title: "SharePoint Web Part XML Properties"
date: "2010-11-24"
categories: 
  - "development"
tags: 
  - "sharepoint"
  - "web-part"
  - "xml"
---

When building a web part for SharePoint, you can use the .webpart file to set default values for almost all of the properties of that web part. But many people don't know what those properties are or what they pertain to. Below is a listing of all the properties of an empty web part:

``` markup
<webParts>
    <webPart xmlns="http://schemas.microsoft.com/WebPart/v3">
        <metaData>
            <type name="yourTypeHere" />
            <importErrorMessage>Cannot import this Web Part.</importErrorMessage>
        </metaData>
        <data>
            <properties>
                <property name="AllowClose" type="bool">True</property>
                <property name="AllowConnect" type="bool">True</property>
                <property name="AllowEdit" type="bool">True</property>
                <property name="AllowHide" type="bool">True</property>
                <property name="AllowMinimize" type="bool">True</property>
                <property name="AllowZoneChange" type="bool">True</property>
                <property name="CatalogIconImageUrl" type="string" />
                <property name="ChromeState" type="chromestate">Normal</property>
                <property name="ChromeType" type="chrometype">Default</property>
                <property name="Description" type="string">My WebPart</property>
                <property name="Direction" type="direction">NotSet</property>
                <property name="ExportMode" type="exportmode">All</property>
                <property name="Height" type="unit" />
                <property name="HelpMode" type="helpmode">Navigate</property>
                <property name="HelpUrl" type="string" />
                <property name="Hidden" type="bool">False</property>
                <property name="Title" type="string">Web Part Title</property>
                <property name="TitleIconImageUrl" type="string" />
                <property name="TitleUrl" type="string" />
                <property name="Width" type="unit" />
            </properties>
        </data>
    </webPart>
</webParts>
```

For a definition and list of possible values for each of these properties, you can visit the MSDN pages for:

- [System.Web.UI.WebControls.WebParts.WebPart](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.webparts.webpart_properties.aspx "MSDN page for ASP.NET WebPart object")
- [Microsoft.SharePoint.WebPartPages.WebPart](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.webpartpages.webpart_properties.aspx "MSDN page for SharePoint WebPart object")

<h3>What about custom properties?</h3>

You can use SharePoint to create a reference for the properties of your web part. Install your web part, setup the web part the way you would like it by default, and then use the Verbs menu to Export the web part. Locate the exported file, open it in your favorite editor, and your XML is there!  Simple right?
