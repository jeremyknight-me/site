---
layout: layouts/post.njk
title: "Visual Studio Add-ons"
date: "2011-08-26"
tags: 
  - "code-snippet"
  - "customization"
  - "development"
  - "extension"
  - "plugin"
  - "resharper"
  - "software"
  - "stylecop"
  - "tools"
  - "visual-studio"
---

I've been getting the same question a lot lately. What plugins, enhancements, extensions, etc. do you use in Visual Studio? So here's the surprisingly short list:

<h3>ReSharper</h3>

The ReSharper website says:

> ReSharper is a renowned productivity tool that makes Microsoft Visual Studio a much better IDE. Thousands of .NET developers worldwide wonder how they've ever lived without ReSharper's code inspections, automated refactorings, blazing fast navigation, and coding assistance.

I can tell you the ".NET developers worldwide wonder how they've ever lived without ReSharper" is completely true. Once you learn to use it, you'll never want to code without it. I remember the first week I used it I was angry at myself for waiting so long to get my hands on it.

Links:

- [Official Site](http://www.jetbrains.com/resharper/ "Official ReSharper Site")
- [MSDN VS Gallery: ReSharper](http://visualstudiogallery.msdn.microsoft.com/EA4AC039-1B5C-4D11-804E-9BEDE2E63ECF?SRC=Home "MSDN VS Gallery: ReSharper")

<h3>StyleCop</h3>

The official product description reads:

> StyleCop analyzes C# source code to enforce a set of style and consistency rules. It can be run from inside of Visual Studio or integrated into an MSBuild project. StyleCop has also been integrated into many third-party development tools.

The ability to run a tool and have it tell you where to fix your styling is invaluable. Create a custom configuration file (agreed upon by the team of course) and then share it with your team or even better integrate it into you build server. This will ensure that a field is formatted like a field should be consistently in every file. No more style switches per file.

Oh and by the way, the latest release works with ReSharper to allow for quick cleanup of any errors found.

Links:

- [Official Site](http://stylecop.codeplex.com/ "Official StyleCop Site")

<h3>Search References</h3>

(Note: This is built into VS 2012 and beyond) How and why the functionality of this gallery extension isn't built into Visual Studio completely baffles me. This simple extension adds a search box to the top of the .Net tab on the Add References dialog.

<img src="../../../img/posts/2011/search-references.png" alt="" class="mx-auto d-block">

Links:

- [MSDN VS Gallery: Search References](http://visualstudiogallery.msdn.microsoft.com/02c0bded-4739-40ec-af07-9eb002a27246/ "MSDN VS Gallery: Search References")

<h3>Snippet Designer</h3>

If you write code that is structurally the same over and over again, you should learn to build snippets. If you want to build snippets, you want to take a look at this extension. Snippet Designer allows you to highlight code and export as snippet. It has a great GUI for adding in replacement sections, setting the properties of your snippet, etc.

Here is a screenshot of Snippet Designer being used to edit my null coalescing operator snippet.

<img src="../../../img/posts/2011/snippet-designer.png" alt="" class="mx-auto d-block">

Links:

- [Official Site](http://snippetdesigner.codeplex.com/ "Official Snippet Designer Site")
- [MSDN VS Gallery: Snippet Designer](http://visualstudiogallery.msdn.microsoft.com/B08B0375-139E-41D7-AF9B-FAEE50F68392 "MSDN Visual Studio Gallery: Snippet Designer")
