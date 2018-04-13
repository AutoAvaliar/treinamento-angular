<?php
/**
 * Local variables
 * @var \Phalcon\Mvc\Micro $app
 */

/**
 * Add your routes here
 */
$app->get('/', function () {
    echo $this['view']->render('index');
});

/**
 * Not found handler
 */
$app->notFound(function () use($app) {
    $app->response->setStatusCode(404, "Not Found")->sendHeaders();
    echo $app['view']->render('404');
});

$app->before(
    function () use ($app) {
    $app->response->setHeader("Access-Control-Allow-Origin", '*');
});

$app->get('/autores', function () {
    $autorListagem = new \Tf\Lib\Biblioteca\Autor\AutorListar();
    $autorListagem->executar();
    $data = $autorListagem->resposta();
    //$data = [['id' => 1, 'nome' => 'André'], ['id' => 2, 'nome' => 'Bruna'], ['id' => 3, 'nome' => 'Carlos']];
    return json_encode($data);
});

$app->get('/autores/excluir/{id:[0-9]+}', function ($id) {
    $autorExcluir = new \Tf\Lib\Biblioteca\Autor\AutorExcluir($id);
    $autorExcluir->executar();
    $data = $autorExcluir->resultado();
    return json_encode($data);
});

$app->post('/autores/salvar', function () {
    $autorCadastro = new \Tf\Lib\Biblioteca\Autor\AutorCadastro($this->request->getJsonRawBody(true));
    $autorCadastro->executar();
    $data = $autorCadastro->resultado();
    return json_encode($data);
});
