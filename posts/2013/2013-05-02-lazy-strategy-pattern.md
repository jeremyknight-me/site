---
layout: layouts/post.njk
title: "Lazy Strategy Pattern"
date: "2013-05-02"
categories: 
  - "development"
tags: 
  - "net"
  - "code"
  - "design-pattern"
  - "strategy-pattern"
---

The following are some code samples that show how to use Lazy to clean up how your objects are initialized when using the Strategy pattern in .NET. The following code is taken from the DimeCast.Net Strategy pattern video. It uses an enum to select the correct logging strategy and logs the given message. The original code from the video before Lazy is applied looks like (by the way, I'm only posting the sections relevant to strategy and lazy):

``` csharp
public class LoggingService : ILoggingService
{
    private readonly Dictionary<LoggingStrategy, Logger> strategies;
 
    public LoggingService()
    {
        this.strategies = new Dictionary<LoggingStrategy, Logger>();
        this.DefineStrategies();
    }
 
    private void DefineStrategies()
    {
        this.strategies.Add(LoggingStrategy.Event, new EventLogger());
        this.strategies.Add(LoggingStrategy.Repository, new RepositoryLogger());
        this.strategies.Add(LoggingStrategy.Trace, new TraceLogger());
    }
}
```

Here is the same code using the [Lazy\<T\>](http://msdn.microsoft.com/en-us/library/dd642331.aspx "Lazy(T) Class") class in the System namespace.

``` csharp
public class LazyLoggingService : ILoggingService
{
    private readonly Dictionary<LoggingStrategy, Lazy<Logger>> strategies;
 
    public LazyLoggingService()
    {
        this.strategies = new Dictionary<LoggingStrategy, Lazy<Logger>>();
        this.DefineStrategies();
    }
 
    private void DefineStrategies()
    {
        this.strategies.Add(LoggingStrategy.Event, new Lazy<Logger>(() => new EventLogger()));
        this.strategies.Add(LoggingStrategy.Repository, new Lazy<Logger>(() => new RepositoryLogger()));
        this.strategies.Add(LoggingStrategy.Trace, new Lazy<Logger>(() => new TraceLogger()));
    }
}
```

And one final time just in case you don't have access to Lazy<T>. This uses delegates to accomplish the same thing as the Lazy<T> class. I'll be using the [Func\<TResult\>](http://msdn.microsoft.com/en-us/library/bb534960.aspx "Func(TResult) Delegate") delegate.

``` csharp
public class DelegateLoggingService : ILoggingService
{
    private readonly Dictionary<LoggingStrategy, Func<Logger>> strategies;
 
    public DelegateLoggingService()
    {
        this.strategies = new Dictionary<LoggingStrategy, Func<Logger>>();
        this.DefineStrategies();
    }
 
    private void DefineStrategies()
    {
        this.strategies.Add(LoggingStrategy.Event, () => new EventLogger());
        this.strategies.Add(LoggingStrategy.Repository, () => new RepositoryLogger());
        this.strategies.Add(LoggingStrategy.Trace, () => new TraceLogger());
    }
}
```

Now that all the code is out of the way, let's talk a little about why you would want to use this. Let's look at the original code sample. The DefineStrategies function initializes a Logger object and adds it to the Dictionary. Every single Dictionary.Add call in the original code is initializing an object. That's additional memory and processing time for every object. By using Lazy(or the delegate method shown above), you postpone the initialization of the object until you actually ask for it.

Lazy initialization may not work well for everything but I've found that it makes strategy implementations much more lean and efficient in terms of machine resources.
