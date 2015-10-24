<?php

use Proxy\Factory;
use Proxy\Response\Filter\RemoveEncodingFilter;
use Symfony\Component\HttpFoundation\Request;

require 'vendor/autoload.php';

// Create the proxy factory.
$proxy = Factory::create();

// Add a response filter that removes the encoding headers.
$proxy->addResponseFilter(new RemoveEncodingFilter());

// Create a Symfony request based on the current browser request.
$request = Request::createFromGlobals();

// Forward the request and get the response.
$response = $proxy->forward($request)->to('http://localhost:1501' . $_SERVER['REQUEST_URI']);

// Output response to the browser.
$response->send();

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/**
 * Файл .htaccess
 */

php_flag display_errors on
php_flag display_startup_errors on
php_flag html_errors on
php_flag log_errors on

RewriteEngine On
RewriteCond %{REQUEST_FILENAME} -s [OR]
RewriteCond %{REQUEST_FILENAME} -l [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^.*$ - [NC,L]
RewriteCond %{REQUEST_URI}::$1 ^(/.+)(.+)::\2$
RewriteRule ^(.*) - [E=BASE:%1]
RewriteRule ^(.*)$ %{ENV:BASE}index.php [NC,L]


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/**
 * Файл composer.json
 */

{
    "require": {
        "jenssegers/proxy": "^2.2.1",
        "zendframework/zend-diactoros": "^1.1.4"
    }
}