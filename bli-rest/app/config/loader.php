<?php

/**
 * Registering an autoloader
 */
$loader = new \Phalcon\Loader();

$loader->registerNamespaces([
    'Tf\Lib' => BASE_PATH .'/treinamento-phalcon/app/library/',
    'Tf\Models' => BASE_PATH . '/treinamento-phalcon/app/models/'
]);

$loader->registerDirs(
    [
        $config->application->modelsDir
    ]
)->register();
