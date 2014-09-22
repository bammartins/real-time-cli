# iG Realtime Client  #

Cliente de configuração e utilização do serviço do Realtime.

## Dependência 

Script [ORTC](http://dfdbz2tdq3k01.cloudfront.net/js/2.1.0/ortc.js)

```html
<script async type="text/javascript" src="http://dfdbz2tdq3k01.cloudfront.net/js/2.1.0/ortc.js"></script>
```

## Utilização

Inclua o script `realtime-cli.js` em sua aplicação. O script está localizado na pasta dist/.

Crie nova instância do Realtime Client, passando sua Application Key e Authentication Token.

```javascript 
rtCli = new RTCli({
	app_key     : "your_app_key",
  auth_token  : "your_auth_token"
});
```

O método `connect(client)` é responsavel com fazer a autenticação e fazer as devidas configurações do seu cliente Realtime. Seu callback retorna um novo OrtcClient.

O objeto de `client` contem todos os metodos da classe OrtcClient, veja mais detalhes na [API de Referência] (http://framework.realtime.co/messaging/#javascript), veja o exemplo:

```javascript
rtCli.connect(function(client){
	//do something with client
});
```
Veja o exemplo de utilização do Realtime Client, [exemplo](https://github.com/gmoura/real-time-cli/tree/master/example).

## Parâmetros

### app_key - String - obrigatório

Sua Application Key

### auth_token - String - opcional 
...

## Método

### connect(client)

Configura seu Realtime Client e disponibiliza a partir do parâmetro `client` um novo OrtcClient.

## Documentação Realtime Framework

[JavaScript API Reference] (http://framework.realtime.co/messaging/#javascript)

[Starting Guide] (http://framework.realtime.co/messaging/#starting)








