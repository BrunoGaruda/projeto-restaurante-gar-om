# Comandos iniciais

yarn init -y

yarn add -D typescript

yarn tsc --init

# on tsconfig.json

"outDir": "dist"

# on package.json

"scripts": {
"build": "tsc"
}

# configurando o editorconfig

trim_trailing_whitespace = true

# configurando eslint

npm init @eslint/config

√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · prompt
√ What format do you want your config file to be in? · JSON
√ What style of indentation do you use? · 4
√ What quotes do you use for strings? · single
√ What line endings do you use? · unix
√ Do you require semicolons? · No / Yes
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · yarn

# configurando o servidor

yarn add express

yarn add -D @types/express

# Dependências para ajudar no build

yarn add -D ts-node

- Economiza paços para o build
yarn ts-node src/index.ts

- Vai monitorar em tempo real as alterações. nodemon trabalha junto com o ts-node.
yarn add -D nodemon


# Utilizando banco Mongodb com Docker

instalar Docker
- Criando o container com docker na porta padrão. Lembrar de deixar o docker aberto primeiro
docker run --name mongo -p 27017:27017 -d mongo

- faz a conexão com o banco, e a manipulação da base dados(typing)
yarn add mongoose

# Criando o módulos
- Category
- Order
- Products

# Criando Rotas

- Foi criado o arquivo router.ts para adicionar todas as rotas
- Refatorando as rotas com a pasta useCases

# Usando insomnia

- Serve para ajudar nas requisições e nas manipulações das rotas.
    • Enviando requisições no método POST no insomnia

# Utilizar o Multer

yarn add multer
yarn add -D @types/multer
- É usado para conseguir fazer o parse no form data, e também usar para fazer o upload das imagens.


