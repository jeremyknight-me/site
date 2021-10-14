---
layout: layouts/post.njk
title: "Using a Recursive CTE to Build Paths"
date: "2015-09-25"
categories: 
  - "development"
tags: 
  - "code-snippet"
  - "sql"
---

Here's the scenario. You have a hierarchical data set like categories, folders, etc. and you need to output the entire path for each.

Let's say we take the category example and we have a table that looks like:

``` sql
CREATE TABLE [dbo].[Category]( 
  [Id] [int] IDENTITY(1,1) NOT NULL, 
  [Name] [nvarchar](max) NOT NULL, 
  [ParentCategoryId] [int] NULL, 
  -- normal PK script removed to keep this short 
) 
```

To get the full path for each category, the SQL would look like:

``` sql
WITH CTE_CategoriesWithPaths AS 
( 
  SELECT 
    c.Id, 
    c.Name, 
    c.ParentCategoryId, 
    c.Name AS [Path] 
  FROM Category c 
  WHERE c.ParentCategoryId IS NULL 
  UNION ALL 
  SELECT 
    c.Id, 
    c.Name, 
    c.ParentCategoryId, 
    cte.[Path] + '/' + c.Name AS [Path] 
  FROM 
    Category c 
    INNER JOIN CTE_CategoriesWithPaths cte ON c.ParentCategoryId = cte.Id 
  WHERE c.ParentCategoryId IS NOT NULL 
) 
SELECT * 
FROM CTE_CategoriesWithPaths
```
