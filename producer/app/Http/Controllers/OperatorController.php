<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

class OperatorController extends Controller
{
    public function index()
    {
        $data = [
            'name' => 'Teste',
            'email' => 'teste@teste.com',
            'cc' => '12345678912345',
            'expiration' => '05/25',
            'value' => 1000,
            'parcels' => 2,
            'value_parcel' => 500
        ];

        $this->sendMessage(json_encode($data));
        return true;
    }

    private function connectionRabbit()
    {
        return new AMQPStreamConnection(env('RABBIT_HOST'),env('RABBIT_PORT'),env('RABBIT_USER'),env('RABBIT_PASSWORD'),env('RABBIT_VHOST'));
    }

    private function sendMessage($message)
    {
        $connection = $this->connectionRabbit();

        $channel = $connection->channel();
        $channel->queue_declare('testing',false,true,false,false);

        $rabbitMsg = new AMQPMessage($message);
        $channel->basic_publish($rabbitMsg,'test','testingQueue');

        $channel->close();
        $connection->close();
    }
}
