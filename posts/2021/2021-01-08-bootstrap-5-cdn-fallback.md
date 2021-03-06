---
layout: layouts/post.njk
title: "Bootstrap 5 CDN Fallback"
date: "2021-01-08"  
tags: 
  - "bootstrap"
  - "development"
  - "javascript"
  - "web"
---

Bootstrap 5 has a lot of changes and one of them is the fallback method in case the CDN link doesn't load. 

<h3>Vanilla HTML/JS</h3>

``` markup
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
<script>
    if (!window.bootstrap) { // the bootstrap object is not present
        var newScript = document.createElement("script");
        newScript.setAttribute("src", "js/bootstrap.bundle.min.js");
        document.getElementsByTagName("head")[0].appendChild(newScript);
    }
</script>

<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" 
  onerror="this.onerror=null;this.href='css/bootstrap.min.css';this.removeAttribute('integrity');this.removeAttribute('crossorigin');"
  integrity="..." 
  crossorigin="..." />
```

<h3>ASP.NET Razor</h3>

Here is the Razor syntax for Bootstrap 5 fallback:

``` markup
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
  asp-fallback-src="js/bootstrap.bundle.min.js"
  asp-fallback-test="window.bootstrap">
</script>

<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
  asp-fallback-href="css/bootstrap.min.css"
  asp-fallback-test-class="visually-hidden" 
  asp-fallback-test-property="position" 
  asp-fallback-test-value="absolute"
  integrity="..." 
  crossorigin="..." />
```

These samples still use Bootstrap 4 but there are still a lot of good information on the following pages:

- Link Tag Helper - 
<a href="https://docs.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/built-in/link-tag-helper" target="_blank">https://docs.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/built-in/link-tag-helper</a>

- Script Tag Helper - <a href="https://docs.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/built-in/script-tag-helper" target="_blank">https://docs.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/built-in/script-tag-helper</a>
