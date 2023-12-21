---
title: CLI 101
description: CLI 101
pubDate: 2023-12-15T13:49:22-05:00
---

# CLI 101

## Training Exercises

To solidify your knowledge, here are a set of exercises that will require you to use the techniques you've just learned in the lesson above.

They are organized into _small_, _medium_, and _large_ sized problems. The small exercises will be very similar to the examples in the lesson. If you get stuck, refer to the relevant section above. The medium exercises will require you to combine concepts. The lesson may not have a single, specific example for you to reference. The large exercises are more open-ended and may require you to search the web for additional material.

### Small

#### Decomposing Commands

Decompose the following commands by identifying the command, arguments and modifiers for each command.

```bash
git status
```

:::details Solution

- `git` is the command
- `status` is a modifier
  :::

```bash
rm -rf ./Sample
```

:::details Solution

- `rm` is the command
- `-rf` are two arguments
- `./Sample` is a modifer for the `f` argument
  :::

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

:::details Solution

- `/usr/bin/ruby` is the command
- `-e` is an argument
- `"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` is a modifer for `-e`

However, the `"$(curl ...` modifer is itself a command!

- `curl` is the command
- `-fsSL` are arguments
- `https://raw.githubusercontent.com/Homebrew/install/master/install` is a modifer for `-L`
  :::

### Medium

#### Music Library

Create directories to hold your a few of your favorite music albums. (Don't worry, you won't be working with actual music files.)

For example, you might organize the songs and albums into genre and artist directories:

```
my-music/
├── classic-rock
│   └── david-bowie
│       ├── blackstar
│       └── hunky-dory
└── jazz
    ├── dave-brubeck
    │   └── take-five
    └── miles-davis
        └── kind-of-blue
```

Use the `touch` command to create a few (empty) song files:

```{6,7}
my-music/
├── classic-rock
│   └── david-bowie
│       ├── blackstar
│       └── hunky-dory
│           ├── changes.mp3
│           └── oh-you-pretty-things.mp3
└── jazz
    ├── dave-brubeck
    │   └── take-five
    └── miles-davis
        └── kind-of-blue
```

As you work, use `ls` and `pwd` to confirm your progress.

:::details Solution

Use the `mkdir` and `cd` commands to create directories and move from one directory to another. Use the `touch` command to create files.

```sh
mkdir my-music
cd my-music/
mkdir jazz
cd jazz
mkdir miles-davis
cd miles-davis
mkdir kind-of-blue
cd ..
mkdir dave-brubeck
cd dave-brubeck
mkdir take-five
cd ../..
mkdir classic-rock
cd classic-rock
mkdir david-bowie
cd david-bowie
mkdir hunky-dory
cd hunky-dory
touch changes.mp3
touch oh-you-pretty-things.mp3
cd ..
mkdir blackstar
```

:::

#### Create a Project

Create the following directories and files in the following items:

```
project/
├── assets
│   ├── logo.svg
│   └── photo.jpg
├── css
│   └── styles.css
├── index.html
└── js
    └── scripts.js
```

As you work, use `ls` and `pwd` to confirm your progress.

:::details Solution

Use the `mkdir` and `cd` commands to create directories and move from one directory to another. Use the `touch` command to create files.

```sh
mkdir project
cd project/
touch index.html
mkdir css
cd css
touch styles.css
cd ..
mkdir js
cd js
touch scripts.js
cd ..
mkdir assets
cd assets
touch logo.svg
touch photo.jpg
cd ..
```

:::

### Large

#### Creating a Shell Script

Create a [shell script](https://flaviocopes.com/bash-scripting/) that you can run like this:

```sh
cfe my-project
```

And produces a new tree of directories and files that looks like this:

```
my-project/
├── assets
├── css
│   └── styles.css
├── index.html
└── js
    └── scripts.js
```

`cfe` is short for "Create Front End". Though you'll need to search the web for the details, here are some of the steps you'll need to perform:

- Accepting command line arguments
- Putting the file in your `PATH` (or modifying your `PATH`)
- Making it executable with `chmod`
