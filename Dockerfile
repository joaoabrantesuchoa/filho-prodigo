# filepath: /home/joao/filho-prodigo/Dockerfile
# Use uma imagem base oficial do Node.js
FROM node:20-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale a versão mais recente do npm
RUN npm install -g npm@latest

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código do projeto para o diretório de trabalho
COPY . .

# Construa o projeto Next.js
RUN npm run build

# Exponha a porta que o Next.js usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]