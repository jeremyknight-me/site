---
layout: layouts/post.njk
title: "VirtualBox UUID Change Script"
date: "2010-07-10"
tags: 
  - "personal-computing"
  - "script"
  - "virtualbox"
  - "virtualization"
---

*UPDATE: Oracle has decided to change the command from setvdiuuid to sethduuid for version 4 of VirtualBox. Please make this correction if you are using version 4.*

How many times do you simply copy a virtual hard drive when you want to stand up a development environment? In [VirtualBox](http://www.virtualbox.org/ "VirtualBox"), it isn't as simple as a simple copy, paste, and rename. Each virtual hard drive in the VirtualBox world (.vdi files) gets its own universally unique identifier, or UUID. When you copy a vdi file with your file explorer it also brings over the UUID. Fortunately, VirtualBox has a command to generate a new UUID for a copied vdi file.

``` powershell
%ProgramFiles%\Oracle\VirtualBox\VBoxManage.exe internalcommands setvdiuuid
```

Being in the SharePoint development world, I create new virtual machines all the time so I created a script to take care of the UUID change. I have a batch file named _changeUUID.bat_ that this script is contained.

``` powershell
@ECHO OFF
IF "%1"=="" GOTO Error
"c:\Program Files\Oracle\VirtualBox\VBoxManage.exe" internalcommands setvdiuuid %1
GOTO Exit
:Error
ECHO No file path given!
:Exit
PAUSE
```

Gist Link: [https://gist.github.com/knight0323/4488526](https://gist.github.com/knight0323/4488526)

NOTE: VirtualBox does offer a command called _clonevdi_ which will copy the vdi and ensure a new UUID is assigned to the clone. The _setvdiuuid_ command is just a personal preference.
