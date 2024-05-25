---
layout: layouts/post.njk
title: "C# Syntax Lowering"
date: "2024-05-24"  
tags: 
  - "dotnet"
  - "code-snippet"
  - "code"
  - "csharp"  
---

I was catching up on my ever-growing backlog of YouTube videos when I came across Nick Cosentino's video "<a href="https://www.youtube.com/watch?v=MtXDh82zwns" target="_blank">UNEXPECTED 87% Performance Boost! - C# Collection Initializers</a>". The video piqued my interest and I came away knowing a little more about C#. 

I also went straight into Visual Studio to replicate his benchmarks and found a few interesting things due to lowering. The original benchmarks focused on `List<T>` so I started playing with different return types. 

``` csharp
[MemoryDiagnoser]
public class CollectionInitializerBenchmarks
{
    [Benchmark(Baseline = true)]
    public IReadOnlyCollection<string> Classic_NoCapacity()
        => new List<string>() { "Apple", "Banana", "Orange" };

    [Benchmark]
    public IReadOnlyCollection<string> Classic_SetCapacity()
        => new List<string>(capacity: 3) { "Apple", "Banana", "Orange" };

    [Benchmark]
    public IReadOnlyCollection<string> CollectionExpression_ReadOnlyCollection()
        => ["Apple", "Banana", "Orange"];

    [Benchmark]
    public List<string> CollectionExpression_List()
        => ["Apple", "Banana", "Orange"];

    [Benchmark]
    public IReadOnlyCollection<string> ManuallyAdd_NoCapacitySet()
    {
        List<string> list = [];
        list.Add("Apple");
        list.Add("Banana");
        list.Add("Orange");
        return list;
    }

    [Benchmark]
    public IReadOnlyCollection<string> ManuallyAdd_CapacitySet()
    {
        List<string> list = new(3);
        list.Add("Apple");
        list.Add("Banana");
        list.Add("Orange");
        return list;
    }
}
```

After a few runs, I was curious to know what was going on behind the scenes with the collection initialization syntax `List<int> numbers = [];`. Enter <a href="https://sharplab.io/" target="_blank">SharpLab</a>.

A large portion of changes to C# in recent years have been syntactical sugar that gets lowered. In a nutshell, lowering is rewriting a high-level syntax or language feature into lower-level equivalents. In C#, auto-properties are a great example as the auto-property syntax gets lowered into the full property with a backing field. 

``` csharp
// auto-property
public string Test { get; set; }
```

``` csharp
// lowered backing field and full property
private string <Test>k__BackingField;
public string Test
{
    [CompilerGenerated]
    get { return <Test>k__BackingField; }
    [CompilerGenerated]
    set { <Test>k__BackingField = value; }
}
```

SharpLab is my tool of choice for seeing lowered code and things got interesting when I started looking thru the <a href="https://sharplab.io/#v2:CYLg1APgAgDABFAjAFgNwFgBQUDMCBMcAwgPYA2ZApgMYAuAliQHYCST9DAhmfQF6UAnAEKUm1ABYBbTgIDWAZzgBvLHDUI8LAEqVOwAPJMyAT1IUaDZgB4kMAHzEynefPrUA+gDkSRTgAdOag5jAAoASlV1KIBeByZKAHc4ABl6eVobRHtw5TgAIgBBPz8qPIAafKFOJmrOcvz9AWqAc0o8uABfDEwoyLVcOG1dAyNTcio6RiZM+zgAWWqAV24TAuBgLx9/QOCAZUpacL7lY6jU9JmHHnS4aLgAbQBdbqio69oAOjXgEMLi0rCL1eaneX3WvyqNRqeUBp3UoO+v0aLTasJ6wIQAHY4O8gWoOlhjgMhnpDCYzBNLNNbA4iE4XG53PtaL4AkFaKEIujgbE4PEkucMjSQtRtuzjCA4Dgwrk/iU2hU8pDavU8simK12l1jkTNDpSaMKRYppd5ksVsZvu5WTsOcyjtyTo6zmkhVkrq7bnzEiFpXjXgjwXKAf63q6wT8lbVoWiMTjw4i1U0NajQ+ooNjcccCZhdYN9SNyeNjdYacRi5NmABRAAefgElAZzHcBbJY3MlaYDrjvPuwYVlWjdUV6s1z0JjoGgtNRs7tfrjdczcF3Yxvf7quV0JHybHqF6mA6QA==">lowered code for the different return types</a> (I've sorted the methods to make comparison easier).

``` csharp
public class CollectionInitializerBenchmarks
{
    public IReadOnlyCollection<string> Classic_NoCapacity()
    {
        List<string> list = new List<string>();
        list.Add("Apple");
        list.Add("Banana");
        list.Add("Orange");
        return list;
    }

    public IReadOnlyCollection<string> ManuallyAdd_NoCapacitySet()
    {
        List<string> list = new List<string>();
        list.Add("Apple");
        list.Add("Banana");
        list.Add("Orange");
        return list;
    }

    public IReadOnlyCollection<string> Classic_SetCapacity()
    {
        List<string> list = new List<string>(3);
        list.Add("Apple");
        list.Add("Banana");
        list.Add("Orange");
        return list;
    }

    public IReadOnlyCollection<string> ManuallyAdd_CapacitySet()
    {
        List<string> list = new List<string>(3);
        list.Add("Apple");
        list.Add("Banana");
        list.Add("Orange");
        return list;
    }

    public IReadOnlyCollection<string> CollectionExpression_ReadOnlyCollection()
    {
        string[] array = new string[3];
        array[0] = "Apple";
        array[1] = "Banana";
        array[2] = "Orange";
        return new <>z__ReadOnlyArray<string>(array);
    }

    public List<string> CollectionExpression_List()
    {
        List<string> list = new List<string>();
        CollectionsMarshal.SetCount(list, 3);
        Span<string> span = CollectionsMarshal.AsSpan(list);
        int num = 0;
        span[num] = "Apple";
        num++;
        span[num] = "Banana";
        num++;
        span[num] = "Orange";
        num++;
        return list;
    }
}
```

The `Classic` and `ManuallyAdd` methods were pretty much as expected but the `CollectionExpression` were VERY different. Not only can the collection initializer set the capacity to the given number of items but it lowers differently based on the return type. If C# updates further optimize the lowered code, we'll be able to take advantage of those optimizations with no code changes!

For reference, here are the benchmark from one of my final runs: 

<table class="table table-sm">
    <thead>
        <tr style="height: 13px;">
            <th style="height: 13px;">Method</th>
            <th style="height: 13px;">Mean</th>
            <th style="height: 13px;">Ratio</th>
            <th style="height: 13px;">Allocated</th>
            <th style="height: 13px;">Alloc Ratio</th>
        </tr>
    </thead>
    <tbody>
        <tr style="height: 13px;">
            <td style="height: 13px;">Classic_NoCapacity</td>
            <td style="height: 13px;">13.204 ns</td>
            <td style="height: 13px;">1.00</td>
            <td style="height: 13px;">88 B</td>
            <td style="height: 13px;">1.00</td>
        </tr>
        <tr style="height: 13px;">
            <td style="height: 13px;">Classic_SetCapacity</td>
            <td style="height: 13px;">7.896 ns</td>
            <td style="height: 13px;">0.60</td>
            <td style="height: 13px;">80 B</td>
            <td style="height: 13px;">0.91</td>
        </tr>
        <tr style="height: 13px;">
            <td style="height: 13px;">CollectionExpression_ReadOnlyCollection</td>
            <td style="height: 13px;">5.812 ns</td>
            <td style="height: 13px;">0.44</td>
            <td style="height: 13px;">72 B</td>
            <td style="height: 13px;">0.82</td>
        </tr>
        <tr style="height: 13px;">
            <td style="height: 13px;">CollectionExpression_List</td>
            <td style="height: 13px;">9.031 ns</td>
            <td style="height: 13px;">0.68</td>
            <td style="height: 13px;">80 B</td>
            <td style="height: 13px;">0.91</td>
        </tr>
        <tr style="height: 13px;">
            <td style="height: 13px;">ManuallyAdd_NoCapacitySet</td>
            <td style="height: 13px;">12.276 ns</td>
            <td style="height: 13px;">0.93</td>
            <td style="height: 13px;">88 B</td>
            <td style="height: 13px;">1.00</td>
        </tr>
        <tr style="height: 13px;">
            <td style="height: 13px;">ManuallyAdd_CapacitySet</td>
            <td style="height: 13px;">8.265 ns</td>
            <td style="height: 13px;">0.63</td>
            <td style="height: 13px;">80 B</td>
            <td style="height: 13px;">0.91</td>
        </tr>
    </tbody>
</table>

Relavent Links:
- <a href="https://www.devleader.ca/2024/03/31/collection-initializer-performance-in-c-double-your-performance-with-what/">Nick Cosentino's Post</a>
