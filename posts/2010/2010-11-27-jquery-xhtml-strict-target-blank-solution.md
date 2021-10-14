---
layout: layouts/post.njk
title: "jQuery XHTML Strict Target=\"_blank\" Solution"
date: "2010-11-27"
categories: 
  - "development"
tags: 
  - "code"
  - "javascript"
  - "jquery"
  - "web"
---

As many of you know, XHTML Strict does not allow the target attribute within <a> tags. I have been using a JavaScript solution which I found online a few years back. The code was a bit verbose so I decided to update it using jQuery.

\[sourcecode language="javascript" wraplines="false"\] $(document).ready(function () { $('a\[rel="external"\]').each(function(i) { $(this).attr('target', '\_blank'); }); }); \[/sourcecode\]

With the above code in place, simply put rel="external" on any anchor tags that need to open in a new window.
