---
layout: layouts/post.njk
title: "Back to Basics: System.String"
date: "2011-10-28"
tags: 
  - "development"
  - "dotnet"
  - "code"
  - "string"
---

For such a simple concept, the string class is, in my opinion, one of the most complex classes in the System namespace. The MSDN page for String Class is 53 printed pages excluding the 2 additional pages of comments.

<h3>What is System.String?</h3>

In the .NET framework, the string type is a reference type. It is not a value type as is often the belief. It is an object that consists of a collection of System.Char values in sequential order. Characters within the string can be referenced as follows:

``` csharp
string foo = "bar"; 
char r = foo[2];
```

<h3>Immutable</h3>

The string type is also immutable. You cannot change the contents of a string without reflection or [unsafe code](http://msdn.microsoft.com/en-us/library/ms228599.aspx "[MSDN] How to: Modify String Contents"). The methods, operators, etc. that appear to modify a string actually return a new string with the modified contents. The Replace function of the string object is a great example of this. You cannot simply call the Replace method. You have to return the results of the method to a string variable.

``` csharp
string foo = "abc";
foo = foo.Replace("abc", "xyz");
```

<h3>Concatenation and the Compiler</h3>

The compiler does some interesting things when working with strings. For example, when concatenating with variables in a single statement:

``` csharp
string foobar = foo + " " + bar;
 
// compiler sees the above as:
string foobar = string.Concat(foo, " ", bar);
```

When you use constants such as literals and const string members, the compiler knows that all the parts are constant and it does all the concatenation at compile time, storing the full string in the compiled code.

``` csharp
string foobar = "foo" + " " + "bar";
 
// compiler sees the above as:
string foobar = "foo bar";
```

``` csharp
const string foo = "foo";
string foobar = foo + " " + "bar";
 
// compiler sees the above as:
string foobar = "foo bar";
```

<h3>String.Empty versus ""</h3>

And finally, there is a difference between string.Empty and “”. When you use “”, .NET creates an object but when you use string.Empty it does not. The difference may be small, but its a difference that can make a performance impact.

``` csharp
string foo = ""; // creates an object
string bar = string.Empty; // doesn't create an object
```
