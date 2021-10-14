---
layout: layouts/post.njk
title: "Calculate Elapsed Time in .NET"
date: "2011-06-23"
categories: 
  - "development"
tags: 
  - "net"
  - "code"
  - "stopwatch"
---

I came across this while preparing an upcoming blog entry and felt the need to share. I was looking for a way to calculate the time of an operation. I searched over and over again only to find the following pattern:

\[sourcecode language="csharp" wraplines="false"\] DateTime startTime = DateTime.Now; // do operation DateTime endTime = DateTime.Now; TimeSpan runTime = endTime - startTime; \[/sourcecode\]

Unfortunately, this pattern isn't very accurate and rarely outputs anything other than zero on simple operations. I needed to output elapsed time for even these simple operation so I kept searching until finally I came across the [System.Diagnostics.Stopwatch](http://msdn.microsoft.com/en-us/library/system.diagnostics.stopwatch.aspx "System.Diagnostics.Stopwatch MSDN Page") class. The code is more readable and (after a bit of testing) is capable of tracking the elapsed time of simple operations.

\[sourcecode language="csharp" wraplines="false"\] Stopwatch stopwatch = new Stopwatch(); stopwatch.Start(); // do operations stopwatch.Stop(); TimeSpan runTime = stopwatch.Elapsed; long runTimeMilliseconds = stopwatch.ElapsedMilliseconds; long runTimeTicks = stopwatch.ElapsedTicks; \[/sourcecode\]

Hopefully, putting this out there will help people find this method much quicker than I did. And as my mother used to tell me: just because everyone else does it, it doesn't make it right.
