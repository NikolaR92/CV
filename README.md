#[CV Sajt] - Nikola Ristić

##Dependencies
* [git](https://git-scm.com/) - Distributed version control system
* [node.js](http://nodejs.org) - JavaScript runtime
* [yarn](https://yarnpkg.com) - Packages dependecy manager
* [composer](https://getcomposer.org/) - Package manager for PHP

## Clone a repository

```sh
$ git clone https://NikolaR92@bitbucket.org/NikolaR92/cv-site.git
```

##Installing dependencies for Ubuntu

Npm
```sh
$ sudo apt-get install npm
```
Yarn
```sh
$ sudo apt-get install curl
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update
$ sudo apt-get install yarn
```
Composer
```sh
$ php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
$ php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
$ php composer-setup.php
$ php -r "unlink('composer-setup.php');"
```

##Install tools JavaScript

```sh
$ yarn install - installs all packages of a project
$ yarn upgrade - upgrades all packages of a project
```
##Adding new packages with yarn
dependencies
```sh
$ yarn add package_name
```
devDependencies
```sh
$ yarn add --dev package_name
```

## JavaScript packages for a project

* [Grunt](http://gruntjs.com) - The JavaScript Task Runner
* [FontAwesome](https://fortawesome.github.io/Font-Awesome/) - The iconic font and CSS toolkit
* [jQuery](https://jquery.com/) - Fast, small, and feature-rich JavaScript library.
* [Bootstrap](https://getbootstrap.com/) - Free front-end framework for faster and easier web development
* [AngularJS](https://angularjs.org) - JavaScript libery for developing single-page applications
* [Less](http://lesscss.org/) - Less is a backwards-compatible language extension for CSS.
* [CSSMIN](https://github.com/gruntjs/grunt-contrib-cssmin) - minify CSS 
## Install tools PHP
```sh
$ composer.phar install - installs all packages for a project
```

## PHP packages for a project
* [PHPMailer](https://github.com/PHPMailer/PHPMailer) - A full-featured email creation and transfer class for PHP

## Build project
```sh
$ yarn build
```
