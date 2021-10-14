---
layout: layouts/post.njk
title: "SQL If Exists Then Drop"
date: "2013-04-15"
categories: 
  - "development"
tags: 
  - "code-snippet"
  - "database"
  - "sql"
---

This is one topic that I continually find myself refering to my notes and bookmarks on and I've finally decided to add this piece of very good reference information to my own blog.

# Tables

Option 1: \[sourcecode language="sql"\]IF OBJECT\_ID('enterTableNameHere', 'U') IS NOT NULL BEGIN DROP TABLE \[dbo\].\[enterTableNameHere\] END GO\[/sourcecode\]

Option 2: \[sourcecode language="sql"\]IF EXISTS ( SELECT \* FROM dbo.sysobjects WHERE id = object\_id(N'\[dbo\].\[enterTableNameHere\]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1 ) BEGIN DROP TABLE \[dbo\].\[enterTableNameHere\] END GO\[/sourcecode\]

# Views

\[sourcecode language="sql"\]IF EXISTS ( SELECT \* FROM INFORMATION\_SCHEMA.VIEWS WHERE TABLE\_SCHEMA = 'enterSchemaNameHere' AND TABLE\_NAME = 'enterViewNameHere' ) BEGIN DROP VIEW \[dbo\].\[enterViewNameHere\] END GO\[/sourcecode\]

# Stored Procedures

\[sourcecode language="sql"\]IF EXISTS ( SELECT \* FROM dbo.sysobjects WHERE id = object\_id(N'\[dbo\].\[enterStoredProcedureNameHere\]') AND OBJECTPROPERTY(id, N'IsProcedure') = 1 ) BEGIN DROP PROCEDURE \[dbo\].\[enterStoredProcedureNameHere\] END GO\[/sourcecode\]

# User-Defined Functions

\[sourcecode language="sql"\]IF EXISTS ( SELECT \* FROM INFORMATION\_SCHEMA.ROUTINES WHERE ROUTINE\_NAME = 'enterFunctionNameHere' AND ROUTINE\_SCHEMA = 'dbo' AND ROUTINE\_TYPE = 'FUNCTION' ) BEGIN DROP FUNCTION \[dbo\].\[enterFunctionNameHere\] END GO\[/sourcecode\]
