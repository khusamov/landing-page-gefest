
Установка Node.js
=================

Установка Git:

~~~
apt-get install git
~~~

Установка NVM:

Источник: https://github.com/creationix/nvm

~~~
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.2.. | bash
~~~


Установка Node.js:

~~~
nvm ls-remote
nvm install v4.2.1
nvm use v4.2.1
nvm alias default v4.2.1
node -v
~~~

Глобальная установка Composer
=============================
Источник: https://getcomposer.org/doc/00-intro.md#globally

~~~
sudo apt-get install curl
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
~~~

Вариант без sudo:

~~~
apt-get install curl
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
~~~

Установка PHP-прокси:
=====================

Источник: https://github.com/jenssegers/php-proxy

~~~
composer require jenssegers/proxy
~~~


Добавить файл:
============

~~~
{
  "name": "calc-gefest-landing-page",
  "dependencies": {
    "calc-gefest-landing-page": "git@github.com:khusamov/landing-page-gefest.git"
  }
}
~~~

Инсталяция пакета:

~~~
npm install landing-page-gefest
~~~