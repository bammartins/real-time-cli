# iG Realtime Client  #

Cliente de configuração e utilização do serviço do  Realtime Framework.

## Dependência 

Script [ORTC](http://dfdbz2tdq3k01.cloudfront.net/js/2.1.0/ortc.js)

```html
<script async type="text/javascript" src="http://dfdbz2tdq3k01.cloudfront.net/js/2.1.0/ortc.js"></script>
```

## Utilização

Inclua o script `realtime-cli.js` em sua aplicação. O script está localizado na pasta dest/.

Depois crie nova instância do Realtime:

```javascript
var 
 rtCli = new RTCli({
  app_key     : "your_app_key",
  auth_token  : "your_auth_token"
 });
```

## Parâmetros

### app_key - String - obrigatório

Sua Application Key

### auth_token - String - opcional 

...

## Documentação Realtime Framework

[JavaScript API Reference] (http://framework.realtime.co/messaging/#javascript)

[Starting Guide] (http://framework.realtime.co/messaging/#starting)








