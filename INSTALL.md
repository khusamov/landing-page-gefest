
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