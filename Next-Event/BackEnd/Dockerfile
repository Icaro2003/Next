# Estágio 1: Build (Compilação)
FROM node:18-alpine AS build

WORKDIR /app

# Copia dependências e configurações do Prisma
COPY package*.json ./
COPY prisma ./prisma/

# Instala dependências
RUN npm ci

# Gera o cliente do Prisma 
RUN npx prisma generate

# Copia o código fonte
COPY . .

# Compila o TypeScript (Gera pasta dist)
RUN npm run build

# Estágio 2: Runtime (Produção)
FROM node:18-alpine

WORKDIR /app

# Copia apenas o necessário para rodar
COPY package*.json ./
COPY prisma ./prisma/

# Copia o arquivo openapi.yaml para a imagem final
COPY openapi.yaml ./
# --------------------------------

# Instala apenas dependências de produção
RUN npm ci --only=production

# Gera o cliente do Prisma novamente para o ambiente de produção
RUN npx prisma generate

# Copia o código compilado do estágio anterior
COPY --from=build /app/dist ./dist

# Expõe a porta 
EXPOSE 3000

# O comando de inicialização será controlado pelo docker-compose
CMD ["npm", "start"]