# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para o check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requesitos funcionais

- [] O organizador deve poder cadastrar um novo evento;
- [] O organizador deve poder visualizar dados de um evento;
- [] O organizador deve poder visualizar a lista de participantes;
- [] O participante deve poder se inscrever em um evento;
- [] O participante deve poder visualizar a sua credencial do evento;
- [] O participante deve poder realizar o check-in no evento;

### Regras de negócio

- [] O participante só poderá se inscrever em um evento uma única vez;
- [] O participante só poderá se increver em eventos que tenham vagas disponíveis;
- [] O participante só poderá realizar o check-in em um evento uma única vez;

### Requesitos não funcionais

- [] O check-in no evento será realizado através de um QRCode;