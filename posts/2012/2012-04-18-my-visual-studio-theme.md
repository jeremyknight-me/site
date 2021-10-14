---
layout: layouts/post.njk
title: "My Visual Studio Theme"
date: "2012-04-18"
categories: 
  - "development"
tags: 
  - "net"
  - "customization"
  - "resharper"
  - "software"
  - "tools"
  - "visual-studio"
  - "xml"
---

So I've finally published my Visual Studio theme on the [Studio Styles](http://studiostyl.es/ "Studio Styles - Custom Styles for Visual Studio") website. It's a customized version of the [Ragnarok Grey theme](http://winterdom.com/2007/10/ragnarokavs2005colorscheme) created by Tomas Restrepro. I darkened the background then had to make a few other subtle changes for readability due to the darker background.

Ragnarok Dark as I've chosen to call it can be found here: [http://studiostyl.es/schemes/ragnarok-dark-grey-customized](http://studiostyl.es/schemes/ragnarok-dark-grey-customized)

And remember to rate it if you like it!

Now a bonus for those of you that use ReSharper. The following line pasted into the bottom of the items section in the XML downloaded from the site before you import will make those To Do Comments and Not Implemented Exceptions stand out.

\[sourcecode language="xml"\]<Item Name="ReSharper Todo Item" Foreground="0x0000FFFF" Background="0x02000000" BoldFont="Yes"/>\[/sourcecode\]
