# Chat-App ( Em construção :construction: )

Criação de uma aplicação da web de troca de mensagens. O projeto conta com uma estrutura de backend desenvolvida em Node.js e que pode ser inicializada independente da estrutura de Frontend, realizada em React.js.

# Ferramentas utilizadas

Além do Node.js e React.js, foram utilizadas:

* MongoDb
* Express
* Mongoose
* Pusher

# Como Inicializar o Projeto 

1) Faça o clone deste projeto usando o comando abaixo no PowerShell:

`https://github.com/Gabboss13/chat-app.git`

2) Instale as dependências utilizadas na aplicação usando a npm:

`npm install`

3) O projeto deve ser incializado separadamente, primeiramente entre nas pastas:

`cd `   `chat-app`

`cd `   `chat-app-back`

4) Em seguida, rode a aplicação com o comando:

`npm start`

 * É possível que a aplicação do Frontend solicite uma nova porta para se conecatar ao Localhost. Use a de usa preferência.


# Utilizando o Banco de Dados
  
 Accesso no arquivo privado
 
 # Como usar a API
 
 A Api possui duas rotas POST e GET
 
 * `'/messages/new'` - insere novas mensagens no banco
 * `//messages/sync - lista todas as mensages
 
 # Como Utilizar o App na Web
 
 Depois de inicializado, digite a sua mensagem no no input "Escreva a sua Mensagem..."
 
 # Atenção
 
 Nos arquivos `package.json`, que podem ser encotrados em ambas as pastas, você pode conferir as versões das dependências instaladas. Caso tenha instalado alguma versão diferente das indicadas, é possível que ocorra alguns conflitos.
