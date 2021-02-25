# RABBITMQ COM LARAVEL + CONSUMER NODEJS + SOCKETIO

Caso seja coveniente utilize o [CloudAMPQ](https://www.cloudamqp.com/) que ja possui servidores do Rabbit ja consigurados.

## Configurações e Instalação

### Projeto Laravel (Producer)

No projeto do laravel as configurações se restrgem a apenas a instalação da lib do Rabbit, para isso acesse a pasta **producer** e rode os seguintes comandos:

```sh
cd producer
composer install
```

Adicone ao arquivo .env as seguintes variaveis de ambiente para acesso ao host do rabbit

RABBIT_HOST=
RABBIT_PORT=5672
RABBIT_USER=
RABBIT_PASSWORD=
RABBIT_VHOST=

Para executar o projeto rode o comando abaixo e através da rota **/operator** envie as informações para a fila.

```sh
cd producer
php artisan serve
```

### Projeto NodeJS (Consumer)

O projeto no node agira como o consumer das informações enviadas para a fila.

Aqui e necessario instalar as depencias do Socket IO e do Rabbit, para isso rode os seguintes comandos:

```sh
cd consumer
yarn /*ou npm install*/
```

Para executar o projeto utilize os comando abaixo, e importante salientar que o comando abaixo e para desenvolvimento utilizando o nodemon que facilita a visualização dos logs.
 
 ```sh
cd consumer
yarn dev /*ou npm dev*/
```

### React com Socket IO

O projeto no frontend ira consumir as informações em tempo real através do socket.

Aqui e necessario instalar as depencias do Socket IO, para isso rode os seguintes comandos:

```sh
cd frontend
yarn /*ou npm install*/
```

Para executar o projeto utilize os comando abaixo

 ```sh
cd frontend
yarn start /*ou npm start*/
```