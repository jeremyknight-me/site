---
layout: layouts/post.njk
title: ".NET String Concatenation"
date: "2012-05-04"
categories: 
  - "development"
tags: 
  - "dotnet"
  - "code"
  - "performance"
  - "string"
  - "stringbuilder"
---

String concatenation is a tool on every developer’s tool belt but in .NET there are multiple ways to accomplish it. There are also a lot of conflicting articles, posts, etc. on the subject. When should you use StringBuilder? When should you use string formatting? This article will hopefully shine some light on when to use each method.

<h3>Which Methods Were Tested?</h3>

- The concatenation operator. In C#, it is the + operator. In VB.NET, it is the & operator.
- The [String.Concat()](http://msdn.microsoft.com/en-us/library/system.string.concat.aspx "String.Concat Method") method.
- The [System.Text.StringBuilder](http://msdn.microsoft.com/en-us/library/system.text.stringbuilder.aspx "StringBuilder Class") class.
- The [String.Format()](http://msdn.microsoft.com/en-us/library/system.string.format.aspx "String.Format Method") method.

<h3>How Were They Tested?</h3>

A console application was prepared to test operation scenarios. The scenarios were timed using the [System.Diagnostics.Stopwatch class](http://msdn.microsoft.com/en-us/library/system.diagnostics.stopwatch.aspx "Stopwatch Class"). The full Visual Studio solution can be found in [my CodePlex project](http://jeremyknight.codeplex.com/ "Jeremy Knight - Code samples, snippets, etc from my personal blog.").

<img src="../../../img/posts/2012/screenshot-single-run.png" alt="" class="mx-auto d-block mb-3">

<h3>What Were the Results?</h3>

<h5>Scenario 1: Loop Concatenation</h5>

The Loop Concatenation scenario was built to test string concatenation within a loop. This data set had the most straight-forward results. The StringBuilder class gives the best performance when using concatenation in this scenaraio.

<img src="../../../img/posts/2012/string-concat-loop-results.png" alt="" class="mx-auto d-block">
<div class="text-center"><em>Loop Concatenation Results (in milliseconds)</em></div>

Code sample using StringBuilder in this scenario:

``` csharp
var builder = new StringBuilder();
 
for (int i = 0; i < this.iterations; i++)
{
    builder.Append("x");
}
 
var testString = builder.ToString();
```

<h5>Scenario 2: Full Name Concatenation</h5>

The Full Name Concatenation scenario was built to test simple string concatenation in which few concatenations occur. It concatenates first name, a space, and last name. This is commonly used to build display names for a UI. These results point to the String.Concat method as the most efficient way to concatenate small numbers of strings.

<img src="../../../img/posts/2012/string-concat-full-name-results.png" alt="" class="mx-auto d-block">
<div class="text-center"><em>Full Name Concatenation Results (in ticks)</em></div>

Code sample using String.Concat in this scenario:

``` csharp
string first = "John";
string last = "Deaux";
string fullName = string.Concat(first, " ", last);
```

<h5>Scenario 3: Long Text Concatenation</h5>

The Long Text Concatenation scenario was built to test long concatenations in which many concatenations occur. It simulates building the body of an email message. These results also point to the String.Concat method as the most efficient. Comparing the prior scenario with this scenario you can begin to see pattern. As you add concatenations, the efficiency of String.Format and StringBuilder (when out of a looping scenario) declines.

<img src="../../../img/posts/2012/string-concat-long-text-results.png" alt="" class="mx-auto d-block">
<div class="text-center"><em>Long Text Concatenation Results (in ticks)</em></div>

Code sample using String.Concat in this scenario:

``` csharp
string newLine = System.Environment.NewLine;
string name = "John Deaux";
string email = "john.deaux@123.me";
string subject = "The Subject of the Message";
string product = "ABC";
string feature = "XYZ";
string body = "The comment(s) made about product/feature.";
 
string[] values = new[]
    {
        "Name: ", name, newLine,
        "Email: ", email, newLine,
        "Subject: ", subject, newLine,
        "Product: ", product, newLine,
        "Feature: ", feature, newLine,
        "Message: ", newLine, body
    };
 
var emailBody = string.Concat(values);
```

<h5>Scenario 4: Date Concatenation</h5>

The Date Concatenation scenario was built to test the formatting of dates. It formats a date into the sortable format of 2011-12-31T15:30:15. Of the people I've talked to about this little experiment, this one has surprised the most. Why? Because it is highly touted by articles, books, and even Microsoft as the way to format data and it's _extremely_ inefficient. The String.Format method is slower and less efficient than every other method tested, including the StringBuilder class, for formatting DateTime objects as strings.

<img src="../../../img/posts/2012/string-concat-date-results.png" alt="" class="mx-auto d-block">
<div class="text-center"><em>Date Concatentation Results (in ticks)</em></div>

Code sample using String.Concat in this scenario:

``` csharp
DateTime date = DateTime.Now;
 
var values = new[]
    {
        date.Year.ToString("0000"),
        "-",
        date.Month.ToString("00"),
        "-",
        date.Day.ToString("00"),
        "T",
        date.Hour.ToString("00"),
        ":",
        date.Minute.ToString("00"),
        ":",
        date.Second.ToString("00")
    };
 
var sortable = string.Concat(values);
```

Yes, you did read that correctly. The above code is _a lot_ faster and more efficient than:

``` csharp
var sortable = string.Format("{0:u}", DateTime.Now);
// or
var sortable = string.Format("{0:yyyy-MM-ddTHH:mm:ss}", DateTime.Now);
```
