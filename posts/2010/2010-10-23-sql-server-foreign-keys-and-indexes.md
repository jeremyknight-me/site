---
layout: layouts/post.njk
title: "SQL Server Foreign Keys and Indexes"
date: "2010-10-23"
tags: 
  - "database"
  - "development"
  - "foreign-key"
  - "index"
  - "microsoft"
  - "sql"
---

This is another one of those cases that just beats it into your head to stop making assumptions.

My first delve into RDBMS's was MySQL. When you create a Foreign Key in MySQL, it will create an [Index](http://www.w3schools.com/sql/sql_create_index.asp "SQL Index - w3schools.com") for you. Unfortunately, I assumed that SQL Server would do the same. Then about a year ago, I was researching ways to speed up some of the queries in a customer's application when I came across [a thread on StackOverflow](http://stackoverflow.com/questions/836167/does-a-foreign-key-automatically-create-an-index "Does a foreign key automatically create an index?"). What did I find? I was making the wrong assumption and you have to create both the Foreign Key and Index in SQL Server.
