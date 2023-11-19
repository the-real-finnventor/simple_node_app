# simple_node_app

A simple Node.js web app.

## Quickstart

### Getting the repo

-   Run
    `git clone https://github.com/the-real-finnventor/simple_node_app.git`
    to clone the repo.
-   Run `cd simple_node_app` to change into the directory.

```
git clone https://github.com/the-real-finnventor/simple_node_app.git
cd simple_node_app
```

### Install requirements

-   Run
    ```npm install```
    to install all requirements for this project.

### Add alias to ~/.zprofile

-   Run
    ```echo alias nodeapp="$PWD"/index.js >> ~/.zprofile```
    to be able to use the `nodeapp` command anywhere.

## Manual

```
Usage: index [OPTIONS]...

Options:
  -V, --version       output the version number
  -p, --port <value>  The port that web app runs on. (default: 8000)
  -h, --help          display help for command
```

## Extras

### Add the manpage

#### Macos

From the `simple_node_app` directory, run
```echo "MANPATH $PWD" | sudo tee -a /private/etc/man.conf```
so anywhere you go you can run
```man nodeapp```
and get my custom manpage.

##### Note that this program has only been tested on MacOS Monterey 12.6.8
