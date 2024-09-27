---
title: My Blog Setup
date: 2024-09-26 12:00:00 -0800
categories: [Blogging, Setup]
tags: [writing, github, markdown, vscode]
description: Opensource blogging on the fly with GitHub Pages, Markdown, and VSCode.
---

The internet is flooded with blogging "solutions". You have your Wordpresses, Mediums, Substacks, Ghosts, and that's just off the top of my head. They all offer various features, but the one thing they all share is none of them are any fun to use.

I wasn't trying to start a newsletter, just trying to jot down my thoughts in an easy, fun way, and maybe learn something along. And I found it with GitHub Pages and VSCode.

## GitHub Pages

[GitHub Pages](https://pages.github.com/) let's you host a website for yourself for free! It only does static websites, so none of the messy JAMStack stuff. But it does support a features important to me, such as custom theme and domain.

Using [Jekyll](https://jekyllrb.com/), you can blog using beautiful Markdown syntax, and without having to deal with any databases or deployment. Once setup, just publish a page using Markdown, upload your changes, and let GitHub Actions do all the work for you!

#### Helpful Links

* [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
* [Jekyll on MacOS](https://jekyllrb.com/docs/installation/macos/)
* [Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
* [Custom Themes](https://pages.github.com/themes/)
* [Chirpy - my favorite theme](https://github.com/cotes2020/chirpy-starter)

## VSCode

[Visual Studio Code](https://code.visualstudio.com/) is an IDE developed by Microsoft with support for [Git](https://code.visualstudio.com/docs/sourcecontrol/overview) and [Markdown](https://code.visualstudio.com/docs/languages/markdown). 

It has a bit of a learning curve. The UI can seem a bit complicated at first and it is very easy to drown in all the options and settings. But once you hone your setup and get the hang of things, especially with all the extensions, writing and publishing becomes a joy.

#### Helpful Extensions

* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Markdown Lint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
* [Markdown Preview - Github Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)
* [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Markdown

You'll be writing your posts in [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax). 

No need for any HTML, CSS, or JavaScript tags. Just write it in simple Markdown and save it as a `.md` file.

Here's a handy [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for quick reference.

## Publishing

Once you have both GitHub Pages & VSCode setup, publishing a post can be done in a few simple steps:

1. Create a new `.md` file in your `_posts` folder
2. Write what you want using Markdown
3. Comming & Push the file after saving
4. Watch GitHub Actions do the deployment

