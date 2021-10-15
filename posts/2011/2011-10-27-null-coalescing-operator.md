---
layout: layouts/post.njk
title: "Null Coalescing Operator"
date: "2011-10-27"
categories: 
  - "development"
tags: 
  - "net"
  - "code"
  - "null"
  - "operator"
---

In C# 2.0, Microsoft introduced the null coalescing operator (??). The ?? operator is a shorthand notation for returning a default value if a reference or [Nullable<T>](http://msdn.microsoft.com/en-us/library/1t3y8s4s.aspx "Nullable Types (C# Programming Guide) - MSDN") type is null.

The examples below show how the null coalescing operator achieves the same result as traditional conditional statements but with less lines of code. Both sets of examples use property getter methods with assumed fields.

**Reference Examples with Conditional Statements**

``` csharp
public MyObject MyObjectProperty
{
    get
    {
        if (this.myObject == null)
        {
            return new MyObject();
        }
 
        return this.myObject;
    }
}
```

**Reference Examples with Null Coalescing Operator**

``` csharp
public MyObject MyObjectProperty
{
    get
    {
        return this.myObject ?? new MyObject();
    }
}
```

**Nullable<T> Example with Conditional Statements**

``` csharp
public int Number
{
    get
    {
        if (this.nullableNumber.HasValue)
        {
            return this.nullableNumber.Value;
        }
 
        return 0;
    }
}
```

**Nullable<T> Example with Null Coalescing Operator**

``` csharp
public int Number
{
    get { return this.nullableNumber ?? 0; }
}
```

The main argument against the ?? operator is that developers don't understand it so it makes the code less readable and maintainable. This is a poor argument in my opinion. As developers, we should never stop trying to improve both ourselves and our teams. This is something that can be taught over lunch one day.

More reading: [?? Operator (C# Reference) - MSDN](http://msdn.microsoft.com/en-us/library/ms173224(v=VS.100).aspx "?? Operator (C# Reference) - MSDN")
