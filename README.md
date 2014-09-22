# iG Real Time Client  #

Cliente de configuração e utilização do serviço do Real Time

[realtime.co](http://www.realtime.co/)

## Dependência 

Script [ORTC](http://dfdbz2tdq3k01.cloudfront.net/js/2.1.0/ortc.js)

```html
<script async type="text/javascript" src="http://dfdbz2tdq3k01.cloudfront.net/js/2.1.0/ortc.js"></script>
```

## Utilização

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







