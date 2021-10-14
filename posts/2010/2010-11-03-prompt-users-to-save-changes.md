---
layout: layouts/post.njk
title: "Prompt Users to Save Changes"
date: "2010-11-03"
categories: 
  - "development"
tags: 
  - "code"
  - "firefox"
  - "internet-explorer"
  - "javascript"
  - "web"
  - "web-browser"
---

Want to be able to prompt users if they have unsaved data and they close out the browser? Unfortunately, I've yet to find a cross browser solution but in Internet Explorer and Firefox the onbeforeunload event gives you just that ability. The event will fire when a user closes the browser or when a user navigates to a different URL. Simply have the function assigned to the event return the string you wish to display to the users.

\[sourcecode language="javascript"\] window.onbeforeunload = function() { if(window.event.clientX < 0 || window.event.clientY < 0) return "You have unsaved changes. Are you sure you wish to leave this page?"; } \[/sourcecode\]

The above code is setup to only work on the browser or tab close button. Remove the if statement if you want it to work when a user navigates away from the page.
