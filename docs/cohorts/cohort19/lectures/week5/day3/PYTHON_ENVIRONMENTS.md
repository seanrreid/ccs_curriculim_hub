---
title: Python Virtual Environments
sidebar_label: Python Virtual Environments
sidebar_position: 4
---

## What the heck are Python "virtual environments"?

Think of an environment as a barrier around your project.

Running Python's `env/bin/activate` script will activate a Python virtual environment, a virtual environments is basically a folder, named `env`, that keeps track of which version of Python, and any associated packages, you're using.

Without this barrier your project will be installing, and looking for, packages at the global level. This can make make packages inconsistent, since packages and versions change between machines (or not exist at all!).

Setting up a virtual environment will insure that your app will use the same versions, and packages, regardless of where it's being installed.

## Creating an environment

The `env` directory is created when you create a Python virtual environment. Once the folder is created, you need to "activate" the enviroment to create the "barrier" around versions/packages.

We'll look at a couple different ways to activate an enviroment. There are others, but we'll focus on the default version, and `pyenv`.

### The usual route: `python -m venv env`

#### What does `python -m venv env` do?

- `-m`: The `m` flag indicates that a module is being executed as a script.
- `venv`: This is the name of the module responsible for creating virtual environments.
- `env`: This is the name of the directory where the virtual environment will be created.

#### Steps to use the command

1. Execute the following command in your project folder to create a directory named `env` containing the virtual environment setup.

   ```bash
   python -m venv env
   ```

2. To activate the virtual environment, use the following command:

   ```bash
   source env/bin/activate
   ```

3. Once activated, the virtual environment's Python interpreter and packages will be used for any Python commands executed in that terminal session.
4. To deactivate the virtual environment, simply type:

   ```bash
   deactivate
   ```

This will revert to using the system's default Python environment.

### A different, possibly faster(?) route: `pipenv`

`pipenv` provides a bit of a shortcut, allowing you to establish an environment _and_ install packages. It is single command that acts as a combination of `pip` (the installer) and `venv` (isolate the environment).

From the [docs](https://pipenv.pypa.io/en/latest/):

> Pipenv is a Python virtualenv management tool that supports a multitude of systems and nicely bridges the gaps between pip, python (using system python, pyenv or asdf) and virtualenv.
>
> Pipenv automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from your Pipfile as you install/uninstall packages. It also generates a project Pipfile.lock, which is used to produce deterministic builds.

- Follow [these instructions](https://pipenv.pypa.io/en/latest/installation.html) to install `pipenv`
- With `pipenv` installed, you can initialize and activate an environment by simply typing `pipenv shell`

:::info
`pipenv` uses a different type of file structure to manage its dependencies. You'll notice a `Pipfile` and `Pipfile.lock` instead of the `/env` folder.
:::

## Managing Python versions with `pyenv`

Essentially, `pyenv` is to Python what `nvm` is to NodeJS (kinda).

(credit to Google's Bard for the following summaries)

> In the simplest terms, `pyenv` is a tool that helps you manage multiple versions of Python on your computer. It allows you to install, uninstall, and switch between different Python versions easily. This is particularly useful for developers who work on projects that require specific Python versions or for those who want to experiment with different Python features without affecting their system's default Python installation.

There are times where you might need different versions of Python for diferent projects. Using a tool like `pyenv` will help you keep track of multiple Python versions on your system. That way you can have multiple projects all using different versions of Python without conflicts.

### Installing `pyenv`

Follow the instructions in the link below to install `pyenv`. There are details for multiple operating systems, we're mostly considered with MacOS.

- [`pyenv` install instructions](https://github.com/pyenv/pyenv?tab=readme-ov-file#installation)

## Further Reading

- [The Hitchhiker's Guide to Python](https://docs.python-guide.org/dev/virtualenvs/) has a good overview of working with Python packages.
