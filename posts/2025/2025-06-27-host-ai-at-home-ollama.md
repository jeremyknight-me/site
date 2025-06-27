---
layout: layouts/post.njk
title: "Hosting AI at Home with Ollama"
date: "2025-06-27"  
tags: 
  - "ai"
  - "homelab"
  - "personal-computing"
  - "tools"
  - "docker"
---

As AI becomes more ubiquitous, I wanted to explore what it meant to bring it closer to home—*literally.* My locally hosted AI environment is built on three pillars: **privacy**, **learning**, and **family empowerment**. Here’s a look at why I created this setup, the tools I use, and how it’s helping me (and even my kids) explore AI in a secure, controlled environment.

## Why Host AI Locally

**1. Learning by Building**

There’s no better way to learn how something works than to build and run it yourself. Hosting AI locally gave me hands-on experience with model tuning, prompt engineering, and container orchestration.

**2. Privacy and Control**

Public cloud models are convenient, but they raise questions about data usage and privacy. Running AI at home means no traffic leaves my network unless I say so.

**3. Safe Access for My Kids**

By hosting models locally, I can provide my children with supervised access to AI tools. It’s a chance for them to explore, ask questions, and experiment—within boundaries I can control.

## Models Running in Ollama

My local setup runs on [Ollama](https://ollama.com), a fantastic tool for managing and running LLMs on local hardware. I’m currently using: llama, deepseek-r1, and gemma3.

You can peek at my Docker Compose configuration here:  
[ollama.compose.yaml](https://github.com/jeremyknight-me/scripts/blob/master/docker/ollama.compose.yaml)

## The Magic of OpenWebUI

One of the most important pieces of this setup is [OpenWebUI](https://github.com/open-webui/open-webui). It provides a customizable, user-friendly interface to interact with local models via Ollama. What makes it truly powerful is the ability to tailor prompts, behaviors, and personas for specific users—especially useful when giving my kids access to AI in a controlled, age-appropriate way.

This flexibility has made OpenWebUI essential for turning raw models into personalized, interactive tools for both learning and development.

## Private Search with searxng

To enhance offline or privacy-first capabilities, I also integrate [searxng](https://github.com/searxng/searxng), a self-hosted meta-search engine that pulls results from multiple sources without logging or profiling. This allows for safe research and exploration, especially when guiding young learners through topics without exposing them to unnecessary tracking or ads.

## Developer Use Cases

When I'm not using more advanced “agent-like” or "agentic" workflows, I use my setup for targeted development queries. For instance, debugging, exploring architectural decisions, writing unit tests, etc.

Here’s a sample prompt I’ve used in OpenWebUI: [dotnet-developer.md](https://github.com/jeremyknight-me/scripts/blob/master/prompts/dotnet-developer.md)

Having this kind of interaction offline and instantly accessible has been a game-changer for iterative development and learning.

## Credit Where It’s Due

This idea was inspired by [NetworkChuck](https://www.youtube.com/@NetworkChuck) fantastic video on hosting your own AI. His walkthrough helped me get started, and I highly recommend watching it if you want a visual step-by-step guide:

[Self-Hosted AI in 2024: How To Run Private, Local AI Chatbots on Your Own Hardware](https://www.youtube.com/watch?v=Wjrdr0NU4Sk)

## Closing Thoughts

Whether you're a developer, parent, or tech tinkerer, a locally hosted AI setup offers a rare combination of **performance, privacy, and flexibility**. I’ve grown a lot through this process—and it’s opened a lot of curiosity and capability for my family too.

If you’re considering doing something similar, I’d love to connect or answer questions. Feel free to explore my code and prompts on GitHub!
