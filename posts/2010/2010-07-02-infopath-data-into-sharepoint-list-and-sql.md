---
layout: layouts/post.njk
title: "InfoPath Data into SharePoint List and SQL"
date: "2010-07-02"
categories: 
  
tags: 
  - "code"
  - "development"
  - "dotnet"
  - "infopath"
  - "sharepoint"
  - "sql"
  - "workflow"
  - "xml"
---

A client wished to push data into their SQL databases from an InfoPath form. Usually quite a simple task but the form was published to a SharePoint library and had fields [published](http://blog.ksenthil.net/archive/2009/07/25/promoting-properties-e28093-expose-infopath-fields-as-site-columns.aspx "Publish InfoPath fields to expose them to SharePoint") so they could be displayed in the library. We looked into a few different mechanisms but ultimately decided on a workflow set to start on creation or update of a list item. The workflow consisted only of a code block that produced the contents of the XML file stored in the SharePoint library and passed it into a stored procedure. The following code block was used produced the entire contents of the XML file as well as the file name.

``` csharp
/*
The variable workflowProperties is an instance of SPWorkflowActivationProperties:
SPWorkflowActivationProperties workflowProperties = new SPWorkflowActivationProperties();
*/
if (workflowProperties.Item.File.Exists)
{
    // get file contents
    string contents;
    using (StreamReader reader = new StreamReader(workflowProperties.Item.File.OpenBinaryStream()))
    {
        contents = reader.ReadToEnd();
    }
    string fileName = Path.GetFileNameWithoutExtension(workflowProperties.Item.File.Name);
}
```

At this point, you can use code to get specific values or pass the entire XML string to SQL depending on your requirements. I would recommend using SharePoint's unique ID for the list item to identify the record in SQL. This will allow you to synchronize any CRUD operation on the SharePoint record to the SQL record.
