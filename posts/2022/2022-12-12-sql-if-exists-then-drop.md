---
layout: layouts/post.njk
title: "SQL If Exists Then Drop (Updated)"
date: "2022-12-12"  
tags: 
  - "code-snippet"
  - "database"
  - "development"
  - "sql"
---

In my [original post](../../2013/2013-04-15-sql-if-exists-then-drop/) back in 2013, I described some ways to add "if exists then drop" 
statements to multiple SQL script types. I'm well overdue for an update on that post as SQL Server 2016 added most of the below syntax.
As with my last post, enjoy the quick reference!

<h3>Drop Statement 'IF EXISTS' </h3>

``` sql

DROP FUNCTION IF EXISTS [dbo].[enterFunctionNameHere];
GO

DROP PROCEDURE IF EXISTS [dbo].[enterStoredProcedureNameHere];
GO

DROP TABLE IF EXISTS [dbo].[enterTableNameHere];
GO

DROP VIEW IF EXISTS [dbo].[enterViewNameHere];
GO
```

<h3>Create or Alter Procedures</h3>

In addition to the above, you can now use `CREATE OR ALTER` directly within your stored procedure script.

``` sql
CREATE OR ALTER PROCEDURE [dbo].[enterStoredProcedureNameHere]
(
	-- params here
)
AS
BEGIN 
    -- sproc here
END
```
