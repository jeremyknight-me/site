---
layout: layouts/post.njk
title: "SP 2010 Site Collection PowerShell Script"
date: "2011-06-10"  
tags: 
  - "code"
  - "database"
  - "development"
  - "powershell"
  - "script"
  - "sharepoint"
  - "site-collection"
---

The following script is what we've been using to create site collections with their own database in SharePoint 2010.

``` powershell
Add-PSSnapin Microsoft.SharePoint.PowerShell –ErrorAction SilentlyContinue
 
## Configure the script
$databaseName = "SP_Content_Database_Name"
$webApplicationUrl = "http://localhost"
$siteCollectionUrl = "http://localhost/sites/siteName"
$siteCollectionName = "Site Collection Name"
$siteCollectionOwner1 = "DOMAIN\user1"
$siteCollectionOwner2 = "DOMAIN\user2"
$siteCollectionTemplate = "STS#1"
 
## Create the database
New-SPContentDatabase -Name $databaseName -WebApplication $webApplicationUrl
 
## Create the site collection
New-SPSite -URL $siteCollectionUrl -OwnerAlias $siteCollectionOwner1 -SecondaryOwnerAlias $siteCollectionOwner2 -ContentDatabase $databaseName -Name $siteCollectionName -Template $siteCollectionTemplate
```

Download the above code at: https://gist.github.com/4488619

If you need a list of site templates available on the machine you can run:

``` csharp 
Get-SPWebTemplate | Sort-Object "Title"
```
