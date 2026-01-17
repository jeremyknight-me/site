---
layout: layouts/post.njk
title: "FileSystemWatcher and .NET Workers"
date: "2026-01-17"  
tags: 
  - "development"
  - "dotnet"
  - "csharp"
  - "code"
---

I hadn’t touched a file watcher since the **.NET Framework** days. When I recently needed to integrate one into a .NET 10 background worker, I expected to find a clean example online. Instead, every search result showed the same pattern: a `BackgroundService` with an infinite loop and a `Task.Delay`.

I kept looking because my first thought was: "This can't be how a file watcher *should* be used". I never did find an example of the solution described below so I wrote this post to document my approach.

## Why Not Use BackgroundService + Infinite Loop?

Many examples online show something like:

```csharp
// code to configure / start watcher here
while (!stoppingToken.IsCancellationRequested)
{
    await Task.Delay(1000);
}
```

This loop works, but it’s wasteful (polling every second), unnecessary (`FileSystemWatcher` already raises events), and adds unnecessary code to maintain.

## My Solution: IHostedService

`BackgroundService` is built on top of `IHostedService` and is great when you need a long‑running loop inside `ExecuteAsync`. But `FileSystemWatcher` is event‑driven so implementing `IHostedService` directly is a better fit. It lets you initialize the watcher in `StartAsync` and dispose it cleanly in `StopAsync` without any polling.

Here’s a minimal example showing the recommended pattern. 

```csharp
internal sealed class FileWatcherWorker : IHostedService, IDisposable
{
    private readonly ILogger<Worker> _logger;
    private FileSystemWatcher _fileWatcher;

    public FileWatcherWorker(ILogger<Worker> logger)
    {
        _logger = logger;
    }

    public void Dispose()
    {
        _fileWatcher?.Dispose();
    }

    public Task StartAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("FileWatcherWorker is starting: {time}", DateTimeOffset.Now);
        _fileWatcher = new()
        {
            Path = "/some/path", // typically retrieved from configuration
            Filter = "*.*" // ex: "*.json", "*.csv"
        };

        _fileWatcher.Created += new FileSystemEventHandler(OnFileCreated);
        _fileWatcher.EnableRaisingEvents = true;

        _logger.LogInformation("FileWatcherWorker started: {time}", DateTimeOffset.Now);
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        if (_fileWatcher is not null)
        {
            _fileWatcher.EnableRaisingEvents = false;
            _fileWatcher.Dispose();
        }

        _logger.LogInformation("FileWatcherWorker stopped: {time}", DateTimeOffset.Now);
        return Task.CompletedTask;
    }

    private void OnFileCreated(object source, FileSystemEventArgs e)
    {
        _logger.LogInformation("File Created: {path}", e.FullPath);
        // Add logic to process the file here
    }
}
```

This solution reinforced my original thoughts when searching online: **you don’t need an infinite loop.** By pairing `FileServiceWatcher` with `IHostedService`, you get:
- clean lifecycle management
- efficient event handling
- predictable startup and shutdown behavior

If you're interested in `FileSystemWatcher`, I suggest reviewing the links below to discover the different events, performance and architectural considerations, etc. For example, one page discusses using `NotifyFilters` to help reduce the number of events your system processes.

Links:

- https://learn.microsoft.com/en-us/dotnet/fundamentals/runtime-libraries/system-io-filesystemwatcher
- https://learn.microsoft.com/en-us/dotnet/api/system.io.filesystemwatcher
- https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.ihostedservice
- https://learn.microsoft.com/en-us/dotnet/core/extensions/timer-service