---
layout: layouts/post.njk
title: "Programmatically Update Web Part Properties"
date: "2010-11-13"
categories: 
  - "development"
tags: 
  - "dotnet"
  - "code"
  - "sharepoint"
  - "web-part"
---

Have you ever wanted to give your users access to the personalized properties of a web part through a custom interface built into a web part? In ASP.NET, updating these properties and more importantly persisting the changes was a pretty straight forward process. Unfortunately, the same straight forward techniques can not be used when developing a SharePoint web part.

The code below is a very simple web part inheriting from _System.Web.UI.WebControls.WebParts.WebPart_. It consists of a TextBox and a Button but it illustrates a complete solution for persisting personalization changes to the SharePoint database programmatically.

``` csharp 
using System;
using System.ComponentModel;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using Microsoft.SharePoint;
using Microsoft.SharePoint.WebControls;
using Microsoft.SharePoint.WebPartPages;
 
namespace UpdatePropertiesWithCode.UpdateMeWebPart
{
    public class UpdateMeWebPart : System.Web.UI.WebControls.WebParts.WebPart
    {
        protected TextBox MessageTextBox;
        protected Button SaveButton;
 
        [Category("My Configuration")]
        [WebBrowsable(false)]
        [WebDescription("Message to display.")]
        [WebDisplayName("Message")]
        [Personalizable(PersonalizationScope.User)]
        public string Message { get; set; }
 
        protected override void CreateChildControls()
        {
            MessageTextBox = new TextBox();
            MessageTextBox.Text = this.Message;
 
            SaveButton = new Button();
            SaveButton.Text = "Save";
            SaveButton.Click += new EventHandler(SaveButtonClick);
 
            Controls.Add(MessageTextBox);
            Controls.Add(SaveButton);
        }
 
        protected void SaveButtonClick(object sender, EventArgs e)
        {
            this.Message = MessageTextBox.Text;
 
            SPWeb web = SPContext.Current.Web;
            SPFile file = web.GetFile(HttpContext.Current.Request.Url.ToString());
            SPLimitedWebPartManager manager = file.GetLimitedWebPartManager(PersonalizationScope.User);
            System.Web.UI.WebControls.WebParts.WebPart webPart = manager.WebParts[this.ID];
            ((UpdateMeWebPart)webPart).Message = this.Message;
 
            try
            {
                web.AllowUnsafeUpdates = true;
                manager.SaveChanges(webPart);
            }
            finally
            {
                web.AllowUnsafeUpdates = false;
            }
        }
    }
}
```
