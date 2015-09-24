## Synopsis
Unit testing with the following tools
- Karma
- Jasmin
- RequireJs
What is Karma the best way to describe is by reading how it works: http://karma-runner.github.io/0.13/intro/how-it-works.html
What is Jasmine
What is RequireJs



## Motivation
Getting the hang of javascript Unit testing

## Things to keep an eye out for
Make sure you have the my.conf.js files configuration setup right otherwise the files won't be loaded

## Installation
1. Follow Karma steps described in http://karma-runner.github.io/0.13/intro/installation.html
2. Follow Jasmine steps described in the README.md https://github.com/jasmine/jasmine-npm
```bash
npm install -g jasmine
jasmine init

```

## Running
```bash
karma start my.conf.js
```


## Config
See http://karma-runner.github.io/0.13/intro/configuration.html for creating a new or edit the config
In your config you can configure the following
- what browsers to use for your tests
- what framework to use for the tests such as Jasmin
The config settings are generated in my.conf.js


## Requirements
- Karma installed either in the project folder or globally