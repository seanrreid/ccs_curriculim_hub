---
title: VSCode Tips & Tricks
sidebar_label: VS Code Tips
sidebar_position: 2
---

We will be using Visual Studio Code as our IDE (Integrated Development Environment). It is available for Mac, PC, and Linux systems.

> **Important**\
> There is a _Visual Studio_ and a _Visual Studio Code_! Make sure to have _Visual Studio Code_!

[![vscode-download](https://img.shields.io/badge/Visual%20Studio%20Code-download-blue?style=for-the-badge&logo=visual-studio-code)](https://code.visualstudio.com/)

## Setup

After installing VS Code, it is ready to go. However, here are a few things to help with optimize the workflow, organization, and experience.

### Command Line Launch

It is handy to launch VS Code directly from the CLI (Command Line Interface) or Terminal app. Here is what to do.

1. Launch VS Code
2. Open the Command Palette (⇧⌘P)
3. Type 'shell command' to find the Shell Command: Install 'code' command in PATH command.\
   ![VS Code Shell Command](./img/VSCode-shell-command.png)

4. Restart your Terminal App.

Now you can type "code . " or "code . (file name)" in any folder to start editing in VS Code!

### Sign-in and Sync

VS Code now has a Sync feature built in that will sync all your customizations and extensions across devices and will restore if you ever have a system failure or change. Also, if you login with GitHub, you can access and use Git directly in VS Code and use key extensions, like GitHub and LiveShare.

1. Click on the Avatar icon.\
   ![Avatar Icon](./img/VSCode-Avatar.png)
2. Click on "Sign in to Sync Settings"\
   ![VS Code Sync](./img/VSCode-Sync.png)
3. A window will open at the top. Click on "Sign in and Turn on"\
   ![VS Code Sync Settings](./img/VSCode-SyncSettings.png)
4. Now another window will open, click on "Sign in with GitHub"\
   ![Sign In with Github](./img/VSCode-GitHub-Signin.png)
5. Now a browser will open(I know, crazy, but stay with me), click on "Continue"\
   ![Github Auth](./img/VSCode-GitHub-Browser-Auth.png)
6. Now an alert will open, click on "Open Visual Studio Code"\
   ![Github Auth Confirm](./img/VSCode-GitHub-Auth-Confirm1.png) - If there is no alert or it doesn't work, use the "Didn't work" option at the bottom of the browser.\
    ![Github Auth ](./img/VSCode-GitHub-Auth-notWork.png)
7. Back to VSCode, a security window will open, click on "Open"\
   ![VSCode Auth Security Window](./img/VSCode-GitHub-Auth-Confirm2.png)

## Settings

![VS Code Gear](./img/VSCode-Gear.png)

Under the Gear icon is an important menu with several quick access items. But lets go to "Settings".

For the most part, you can leave everything at it's default settings. But from here, you can tweak VS Code. The common tweaks are listed first.

> Note: these are optional tweaks and based on personal preference.

1. Auto Save\
   You can set VS Code to auto save your work. This can be useful for live previewing and to never forget to save!
   ![VSCode Auto Save](./img/VSCode-autoSave.png)
   You have three options:

    - afterDelay _(most common)_
        - saves your file after a set time (in ms so 1 sec is 1000. Get used to it, that is programming!)\
          Set the time in the field below the select field.\
          ![VSCode Auto Save Delay](./img/VSCode-autoSave-delay.png)
    - onFocusChange
        - saves file when you move away from the tab/file you are in to something else in VS Code.
    - onWindowChange
        - saves file when you change to a different system window, like Finder.

2. Font and Size\
   We will talk more about this in Theme's in Extensions, but you can change the font size and Font type here if you like.
   ![VSCode Font](./img/VSCode-font.png)

3. Tab Indention: 2 vs 4\
    Ok, this is a war that has been ragging in programming since the beginning of time, like Jedi vs Sith. (just do a Google search)\

   It is a personal preference....kinda. Python requires a 4 space tab. Lots of React & Gatsby projects use a 2 space tab, but it's not required. So, this option is here if/when you want/need to change it.\
   ![VSCode Tab Size](./img/VSCode-tab-size.png)

At this point, you can dive deeper into the tweaks. Experiment if you like. Just remember what you did so you can undo it.

## Extensions

![VS Code Extensions](./img/VSCode-Extensions.png)

Extensions are plugins. And there are a plethora.

Here are a few that are common place and are handy. Again, most are optional, but some you will want for class.

Feel free to share what you find as we are always looking for useful extensions.

## How to install

Click on the extensions icon in VS Code and search for the Extension you want.

Or

Click on the link and install from the Visual Studio Marketplace.

### General Use

1.  Auto Complete Tag\
    [![AutoCompleteTag](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag)

        This is a Pack with two extensions.  Auto Close Tag and Auto Rename Tag.  They will automatically close your tags and if you rename them, it will change the opening/closing tag automatically.

2.  Bookmarks\
    [![Bookmarks](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

        You can add "bookmarks" in your code that you can quickly jump to.  Useful when you have several hundred lines of code.

3.  Bracket Pair Colorizer 2\
    [![Bracket Pair Colorizer 2](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

        Adds color to your curlies "{ }", brackets "[ ]", and parentheses "( )".  Very useful when trying to find the missing one!

4.  Code Spell Checker\
    [![Code-Spell-Checker](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

        ![](./img/Spelling_Nemesis.jpg) Great tool to help defend against the Spelling Nemesis!
        Look for the light blue word linter for misspelled (or what it thinks is misspelled).

5.  Indent-Rainbow\
    [![Indent-Rainbow](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

        This extension colorizes the indentation in front of your text alternating four different colors on each step.

6.  Live Share\
    [![Live Share](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

        We will use this in class, so get it.  This will let you pair program.  It creates a secure link that you can share with another teammate and they can access your VS Code.  You must have it to access a teammate's URL Link.  Very useful.  Once installed, you will have this icon.\
        ![LiveShare](./img/VSCode-liveshare.png)

7.  Live Server\
    [![Live Server](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

        We will use this in class, so get it.  This lets you generate a live server from VS Code while you are working on Frontend projects.

8.  Lorem ipsum\
    [![Lorem ipsum](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum)

        Just a quick little tool to add lorem ipsum sample text when needed.

9.  Visual Studio IntelliCode\
    [![Visual Studio IntelliCode](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

        This is magic!  In simple terms, it is hints on what code you could use!

10. VSCode-PDF\
    [![VSCode-PDF](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf)

        Open PDF documents right in VSCode.

### JavaScript & React

1.  ESLint\
    [![ESLint](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

        ESLint is a code error checker that will save you.  Must have.

### Python

1.  Python Extension Pack\
    [![Python Extension Pack](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](hhttps://marketplace.visualstudio.com/items?itemName=donjayamanne.python-extension-pack)

        This extension pack packages some of the most popular Python extensions.

        Extensions Included
            - Python - Linting, Debugging (multi-threaded, remote), Intellisense, code formatting, refactoring, unit tests, snippets, Data Science (with Jupyter), PySpark and more.
            - MagicPython - Syntax highlighter for cutting edge Python.
            - Jinja - Jinja template language support for Visual Studio Code.
            - Django - Beautiful syntax and scoped snippets for perfectionists with deadlines.
            - Visual Studio IntelliCode - Provides AI-assisted productivity features for Python developers in Visual Studio Code with insights based on understanding your code combined with machine learning..

2.  Python Indent\
    [![Python Indent](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=KevinRose.vsc-python-indent)

        Remember I talked about Python requiring a specific indent?  Well here is a sure fire fix.

### CSS

1.  IntelliSense for CSS\
    [![IntelliSense for CSS](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)

        The magic hint for CSS class names.

### Git & GitHub

1.  GitHub\
    [![GitHub](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

        This extension allows you to review and manage GitHub pull requests and issues in Visual Studio Code.

2.  GitLens\
    [![GitLens](https://img.shields.io/badge/download-blue?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

        GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.
