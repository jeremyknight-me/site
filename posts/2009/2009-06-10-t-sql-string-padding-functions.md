---
layout: layouts/post.njk
title: "T-SQL String Padding Functions"
date: "2009-06-10"
categories: 
  - "development"
tags: 
  - "code"
  - "database"
  - "microsoft"
  - "sql"
---

Some time ago I found myself needing to format the data within a dataset. I thought about writing the code for it but then realized that a SQL implementation would probably be more efficient. I wrote two functions fPadLeft and fPadRight to allow a varchar(MAX) to be padded with any character (in my case it was zeros).

Here's the fPadRight function:

\[sourcecode language="sql" wraplines="false"\] CREATE FUNCTION fPadRight ( @OrigString VARCHAR(MAX) = NULL, @PadLength INT = 0, @PadChar CHAR(1) = '' ) RETURNS VARCHAR(MAX) AS BEGIN DECLARE @Result VARCHAR(MAX); DECLARE @OrigLength INT;

SET @OrigLength = LEN(@OrigString); IF (@OrigLength >= @PadLength) BEGIN SET @Result = @OrigString END ELSE BEGIN SET @Result = @OrigString + REPLICATE(@PadChar, @PadLength - @OrigLength); END

RETURN @Result END GO \[/sourcecode\]

The entire scripts, including if exists logic, are included in the following links:

Pad Right: https://gist.github.com/4488425

Pad Left: https://gist.github.com/4488465
