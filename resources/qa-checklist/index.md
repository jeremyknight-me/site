---
layout: layouts/page.njk
title: QA Checklist
eleventyExcludeFromCollections: true
eleventyNavigation:
  key: qa-checklist
  parentKey: resources
  order: 2
---

**Web Checklist**

General
* Are fonts consistent within functionality?
* Are the company display standards followed?
  * Logos?
  * Font size?
  * Colors?
  * Scrolling?
  * Object use?
* Are legal requirements met?
* Is content sequenced properly?
* Are web-based colors used?
* Is there appropriate use of white space?
* Are tools provided (as needed) in order to access the information?
* Are attachments provided in a static format?
* Are spelling and grammar correct?
* Are alternative presentation options available (for limited browsers or performance issues)?

Navigation
* Is terminology consistent?
* Are navigation buttons consistently located?
* Is navigation to the correct/intended destination?
* Is the flow to destination (page to page) logical?
* Is there a logical way to return?
* Are the business steps within the process clear or mapped?
* Are navigation standards followed?

Ease of Use
* Are help facilities provided as appropriate?
* Are selection options clear?
* Are ADA standards followed?
* Is the terminology appropriate to the intended audience?
* Are clear instructions provided?
* Is there minimal scrolling and resizable screens?
* Do menus load first?
* Do graphics have reasonable load times?
* Are there multiple paths through site (search options) that are user chosen?
* Are messages understandable?
* Are confirmation messages available as appropriate?

Access Control
* Is there a defined standard for login names/passwords?
* Are good aging procedures in place for passwords?
* Are users locked out after a given number of password failures?
* Is there a link for help (e.g., forgotten passwords)?
* Is there a process for password administration?
* Have authorization levels been defined?

Data Security
* Are data inputs adequately filtered?
* Are data access privileges identified? (e.g., read, write, update, and query)
* Are data access privileges enforced?

Data
* Does the application write to the database properly?
* Does the application read from the database properly?
* Does the application follow concurrency rules?
* Are text fields storing information correctly?

Presentation
* Is field data displayed properly?
* Is the spelling correct?
* Are the page layouts and format based on requirements?  (e.g., visual highlighting, etc.)
* Does the URL show you are in a secure page?
* Is the tab order correct on all screens?
* Do the interfaces meet internal visual standards?
* Do the interfaces meet current industry GUI standards?
* Do the print functions work correctly?

Page Design
* Content accounts for 50-80% of a page's design. 
* Page elements are consistent and important information is above the fold.
* Pages load in 10 seconds or less on user's bandwidth.
* Pages degrade adequately on older browsers.
* Text is over plain background and there is high contrast between the two.

Fonts and Graphics
* Graphics are properly optimized.
* Text in graphics is generally avoided.
* Preferred fonts are users: Verdana, Arial, Geneva, san-serif.
* Fonts, when enlarged, don't destroy layout.
* Images are reused rather than rotated.
* Pages still works with graphics turned off.
* Graphics included are necessary to support the message.
* Fonts are large enough and scalable.
* Animation and 3D graphics are generally avoided.

Tables
* Do users have to scroll right to see items in the table?
* Do tables print properly?
* Are columns wide enough or does every row have to wrap around?
* Are certain rows excessively high because of one entry?

Data Verification
* Is the accuracy of stored data sustained?
* Has data been verified at the workstation?
* Has data been verified at the server?
* Are you prevented from entering the same information multiple times (order forms, free samples, etc.)?
* Is a unique identifier assigned to each user entering form data?
* Is data that is requested of the user essential to the process for which it is requested? For example, do you need a user's birthday in order to process his book order or are you simply asking for too much user information?
* Can text be entered in numeric fields?
* Can spaces and blank values be entered in fields?
* Are long strings accepted?
* Do fields allow for the maximum amount of text to be entered?
* Are the initial values of checkboxes and radio buttons correct?
* Are you restricted to only selecting one radio button in a groups at one time?
* Are users prevented from entering HTML code in form fields?
* Is intelligent error handling built into your data verification? (i.e.: if date of birth is a required field mm/dd/yyy, it is unlikely that the person entering the data was born in 1857)

Browser Compatibility
* Is the HTML being used compatible with all appropriate browsers and browser versions?
* Do images display correctly with the browsers under test?
* Does all JavaScript work correctly in the browsers under test?
* Have you printed your site's content from various browsers?
* Have you tested both mouse and keyboard navigation in browsers under test?

Usability, Interface, and Navigation
* Does the home page load quickly? 
* Are the instructions on how to use the site clear to the user? 
* If you follow each instruction does the expected result occur? 
* Is all terminology understandable for all of the site's intended users? 
* Is a navigational bar present on every screen? 
* Is the navigation bar consistently located? 
* Can a user navigate using keyboard only? 
* Can a user navigate without the use of a mouse? 
* Can your site be used by the visually impaired? Red/Green Color-Blind, less than 20/20 vision, etc. 
* Does tabbing work consistently, in a uniform manner? 
* Is there a link to home on every single page? 
* Is page layout consistent from page to page? 
* Is each page organized in an intuitive manner? 
* Are graphics used consistently? 
* Are graphics optimized for quick downloads? 
* Do all the images add value to each page, or do they simply waste bandwidth? 
* Are graphics being used the most efficient use of file size? 
* Does text wrap properly around pictures/graphics? 
* Are all referenced web sites or email addresses hyperlinked? 
* Are hyperlink colors standard? 
* Are fonts too small to read (remember not everyone may have the same vision as you)? 
* Are fonts too large? 
* Is all text properly aligned? 
* Are all graphics properly aligned? 
* Do pages print legibly without cutting off text? 
* Does the site have a site map? 
* Does each hyperlink on the map actually exist? 
* Are there hyperlinks on the site that are not represented on the map? 
* Does each hyperlink work on each page? 
* Is content legally correct (i.e. not filler content placed on site by developers during unit testing)? 
* Is the page background (color) distraction free? 
* Does the Back button work as intended? It should not open a new browser window, redirect you to another site, prevent caching such that the Back navigation requires a fresh trip to the server; all hypertext navigation should be sub-second and this goes double for backtracking 
* Can you get to your desired location with 3 or less clicks from the Home Page? 
* Are all of the parts of a table or form present? Correctly laid out? Can you confirm that selected texts are in the "right place? 
* Are there any broken links? 
* Does a link bring you to the page it said it would? 
* Does the page you are linking to exist? 
* Is contact information for the site owner readily visible and available (name, telephone number, email address, mailing address, fax number)? 
* If a user wishes to bookmark a page, is the page name easily understandable? 
* Does your site's Web address appear in the History list if the user allows for historical page recording? 
* Does the status bar on each Web page accurately reflect the progress of page loading, information, etc.? 
