# NWL 3 Server - Happy 

## Sobre

Back-end do projeto desenvolvido no conjunto de vídeo-aulas da ROCKETSEAT, com algumas 
modificações que achei interessante como o uso (ou tentativa) do DDD, para separar as camadas em NODE.

## TDD

### Porque o uso do TDD ?

* Porque eu quis (brinks)
* Porque possibilita uma melhor separação das funcionalidades (negócios, dados e utilitários)
* Porque é arquitetura nova que estou usando no trampo atual com JAVA e queria testar mesmo que de um jeito meio 'tronxo' com NodeJS.

## As camadas

Como podem ver o projeto é dividido em 3 camadas 'raiz', que são Application, Domain e Common. De uma forma bem básica, como eu entendi (o trampo é novo e eu to na luta pra aprender isso melhor), 
- Application: trata-se da camada de apresentação do negócio, lá vamos ter controllers e representações que vão export a aplicação para o mundo externo.
- Domain: Camada de domínio do negócio, lá vão ficar as classes que representam meu negócio em si, como Beans e Service (responsável por executar funcionalidades de serviço, regras de negócio).
- Common: O que é comum a todo o projeto.

Basicamente os controllers ficam na Application, recebem a chamada vinda 'de fora' com os dados que podem estar em forma de uma representação e ser mapeadas para o domínio ou já recebo no formato do domínio do negócio (foi o que eu fiz), então chamo o serviço que vai aplicar possíveis regras de negócio, como cálculos ou regras referentes ao negócio, e então através de uma implementação do Repository manipular os dados.
Mas porquê ter uma Interface e uma classe que a implementa ? Simples... Hoje eu estou usando o 'TypeORM' mas amanhã posso mudar para o 'Knex' ou usar microserviços e ninguém precisa saber disso, basta que eu implemente o Repository e meu serviço e meu controller continuarão fazendo as mesmas chamadas graças ao contrato definido na interface.

Ah...Além do mais fica bem legal pra separar os testes (que talvez seja um TODO nunca feito nesse projeto)

# TODO

- AJeitar o ErrorHandler
- Implementar testes
- Criar anotation para ficar mais semelhante ao Sringboot (Será que dá ?)
- Sei lá