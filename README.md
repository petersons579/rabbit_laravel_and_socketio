# RABBITMQ COM LARAVEL + CONSUMER NODEJS + SOCKETIO

Caso seja coveniente utilize o [CloudAMPQ](https://www.cloudamqp.com/) que ja possui servidores do Rabbit ja configurados.

## Configurações e Instalação

### Projeto Laravel (Producer)

No projeto do laravel as configurações se restrigem a apenas a instalação da lib do Rabbit, para isso acesse a pasta **producer** e rode os seguintes comandos:

```sh
cd producer
composer install
```

Para executar o projeto rode o comando abaixo e através da rota **/operator** envie as informações para a fila.

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
