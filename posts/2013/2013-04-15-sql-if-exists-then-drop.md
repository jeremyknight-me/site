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

<h3>Tables</h3>

Option 1:

``` sql
IF OBJECT_ID('enterTableNameHere', 'U') IS NOT NULL
BEGIN
    DROP TABLE [dbo].[enterTableNameHere]
END
GO
```

Option 2:

``` sql
IF EXISTS
(
    SELECT * FROM dbo.sysobjects
    WHERE id = object_id(N'[dbo].[enterTableNameHere]')
         AND OBJECTPROPERTY(id, N'IsUserTable') = 1
)
BEGIN
    DROP TABLE [dbo].[enterTableNameHere]
END
GO
```

<h3>Views</h3>

``` sql
IF EXISTS
(
    SELECT * FROM INFORMATION_SCHEMA.VIEWS
    WHERE TABLE_SCHEMA = 'enterSchemaNameHere' AND TABLE_NAME = 'enterViewNameHere'
)
BEGIN
    DROP VIEW [dbo].[enterViewNameHere]
END
GO
```

## Stored Procedures

``` sql
IF EXISTS
(
    SELECT * FROM dbo.sysobjects
    WHERE id = object_id(N'[dbo].[enterStoredProcedureNameHere]')
        AND OBJECTPROPERTY(id, N'IsProcedure') = 1
)
BEGIN
    DROP PROCEDURE [dbo].[enterStoredProcedureNameHere]
END
GO
```

<h3>User-Defined Functions</h3>

``` sql
IF EXISTS
(
    SELECT * FROM INFORMATION_SCHEMA.ROUTINES
    WHERE   ROUTINE_NAME = 'enterFunctionNameHere'
    AND ROUTINE_SCHEMA = 'dbo'
    AND ROUTINE_TYPE = 'FUNCTION'
)
BEGIN
    DROP FUNCTION [dbo].[enterFunctionNameHere]
END
GO
```