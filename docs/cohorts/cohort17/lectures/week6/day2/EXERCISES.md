---
title: Exercises
sidebar_label: Exercises
sidebar_position: 2
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation -->

- Complete the [FastAPI Starter Exercise](/docs/exercises/fastapi-starter/)

## Reminder

Remember to use `pyenv` for these exercises!

## What's the deal with `pyenv`?

### What does it do?

Essentially, `pyenv` is to Python what `nvm` is to NodeJS (kinda).

(credit to Google's Bard for the following summaries)

> In the simplest terms, `pyenv` is a tool that helps you manage multiple versions of Python on your computer. It allows you to install, uninstall, and switch between different Python versions easily. This is particularly useful for developers who work on projects that require specific Python versions or for those who want to experiment with different Python features without affecting their system's default Python installation.
>
> Think of `pyenv` as a personal Python version manager that keeps track of all the Python versions you have installed and lets you choose which one to use for a particular task or project.

### Setting it up

> The `env/bin/activate` script is used to activate a specific Python virtual environment, ensuring that the correct Python version and associated packages are used for your project.
>
> It modifies your current shell session to use the Python environment located in the `env` directory.
>
> Consider it like entering a specific workspace for your project, where you have all the necessary tools and configurations readily available.
> ...

#### Activating an environment

> The `env` directory is specifically created when you create a Python virtual environment using tools like `virtualenv` or `pyenv`.
>
> Once the `env` directory is created, you can activate the virtual environment using the `env/bin/activate` script.

### What does `python -m venv env` actually do?

#### Breaking down the command

- `-m`: The `m` flag indicates that a module is being executed as a script.
- `venv`: This is the name of the module responsible for creating virtual environments.
- `env`: This is the name of the directory where the virtual environment will be created.

##### Steps to use the command

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
