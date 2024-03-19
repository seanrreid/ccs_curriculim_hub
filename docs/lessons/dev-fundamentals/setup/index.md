---
title: Setting Up Your Dev Environment
description: Setting Up Your Dev Environment
sidebar_position: 1
---

## Overview

There are five primary tools you'll use:

- The Visual Studio Code text editor
- The Google Chrome web browser
- A Terminal app
- A package manager for your Operating System
- The Node.js development environment

This lesson will guide you through downloading and installing these tools. The other lessons in the Learning Portal will show you how and when to use them.

## Visual Studio Code

Visit the [Visual Studio Code download site](https://code.visualstudio.com/download) to get an installer for your Operating System.

![VS Code download page](./vscode-site.png)

Download and install the Visual Studio Code text editor (also known as "VS Code" or just "Code"). VS Code is an open-source text editor created by Microsoft. It has some of the best features of many similar editors like Sublime Text and Atom, but with better support, bi-monthly updates, and a plethora of robust extensions.

:::danger You want VS Code, not Visual Studio IDE!
Make sure you're downloading "Visual Studio Code" and not "Visual Studio"

Though they are named similarly, Visual Studio is a much larger program and uses more resources. It will not run as well as VS Code for the kinds of projects we'll build during the bootcamp.
:::

### :bangbang: macOS Additional Steps

#### Move VS Code to your Applications folder

Be sure to move VS Code from your Downloads folder into the Applications folder! VS Code will not work properly if you run it from your Downloads folder.

#### Install the Shell Command

 While working on a project, you'll open VS Code from the command line to edit files. To do so, you'll first need to install the VS Code command line tool.

Open VS Code and press `Command + Shift + p` (that is, press these three keys at the same time: `Command`, `Shift`, and `p`) to open the Command Palette.

In the Command Palette, type the text "shell command". The top result should be `Shell command: Install 'code' command in PATH`. Make sure this result is highlighted and then press the `return` key.

![Installing the VS Code shell command](./install-code-command.png)

You should see a notification in the lower right of the VS Code window telling you that the shell command was successfully installed.

![Confirmation of installation](./success-install-code.png)

With the command line tool install, you can open files and folders in VS Code directly from the Terminal using the `code` command.
:::

## Google Chrome

If you don't have Chrome on your computer, go to the [Google Chrome download page](https://www.google.com/chrome/).

![The Google Chrome download page](./chrome-site.png)

Download and install Chrome.

Chrome is the browser of choice for web developers. It provides a fast browsing experience, support for the newest APIs, and cutting-edge developer tools.

## Command Line Tools

If you're like most folks, you have a microwave in your kitchen. When you want to heat something up, you put it in and press a few buttons. Magic!

However, in a prefessional chef's kitchen, they have an assortment of specialized tools. Not only that, they've spent years becoming experts in using those tools to create dazzling culinary effects.

Up to now, most (if not all) of the programs you've used are "apps" - you press or tap buttons to make it work, just like a microwave. But what do you do if there's no button for the feature you want?

You (and other developers) use the _terminal_.

![Animation of a terminal in use](./terminal-cowsay.gif)

As a developer, you'll be spending quite a lot of time using a terminal. There's a separate [introduction to the command line](/docs/lessons/dev-fundamentals/cli-101/), but this part of the lesson will walk you using the terminal to install some necessary development tools.

The first of these tools is a _package manager_. You can think of it like an App Store, but for command line programs.
To get started, go to the section matching your Operating System:

### Package Manager: Homebrew

Paste this command into a terminal and press the `enter` (or `return`) key:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

It's going to take a while, so get a cup of coffee -- or better yet! Help another student if they've hit a rough patch.

Once it's finished, let's try installing a program. The `tldr` program (which is short for ["too long; didn't read"](https://en.wikipedia.org/wiki/Wikipedia:Too_long;_didn%27t_read)) gives you a cheat sheet for common terminal commands.

```sh
brew install tldr
```

When you run this command, you'll see some activity in your terminal similar to the following:

![Installing tldr with brew](./brew-install-tldr.png)

Now, you can run `tldr` to see a cheatsheet. Here's the output of running `tldr ls`:
![Running tldr ls](./tldr-ls.png)

:::tip Use `tldr` when you get stuck!

There are a lot of commands to get familiar with, and it's easy to forget how to use them. When you can't quite recall how to use a command, remember `tldr`. Here are some other cheatsheets you can view now:

- `tldr cd`
- `tldr mv`
- `tldr mkdir`
:::

#### git

Your Mac should already have the `git` command installed. To check, run this command in the terminal:

```sh
which git
```

You should see output like:

```sh
/usr/bin/git
```

If so, that's great! Move on to the next step.

If it didn't print anything at all, it means that you'll need to install git. You can do that with Homebrew by running this command:

```sh
brew install git
```

#### nvm and Node.js

:::warning
There should be no previous version of Node installed on your computer. If you do, follow these [instructions to uninstall](https://gist.github.com/nicerobot/2697848) it.
:::

And then...

In order to install Node.js, you'll need to first install `nvm`. nvm is a Node.js version manager, which is the way we recommend you install Node.js. It allows you to install and use different versions of Node.js. This is important when you need to maintain projects that rely on a specific version of Node.js.

Though it seems more complicated than it needs to be, that's how it is is the software world. Let's walk through it step by step.

Install nvm by pasting in this command into your terminal:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | $SHELL
```

and then press the `return` key.

**Close this terminal** and open a new one.

In the new terminal window, run this command:

```sh
nvm install --lts
```

Press the `return` key to run the command.

You should see that nvm is downloading and installing the latest version of node!

#### Bonus Software

Here are two more programs that you might find useful.

##### Terminal Emulator: iTerm2

[Download iTerm2](https://iterm2.com/)

Download and install iTerm2 for your Mac. It's like a supercharged Terminal program that allows you to split screen your terminal windows, easily load tabs, and loads of other cool stuff!
