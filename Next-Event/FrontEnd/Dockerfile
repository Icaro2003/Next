# Estágio 1: Build do App React (Vite)
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Argumento para URL da API
ARG VITE_API_URL=http://localhost:4000/api
ENV VITE_API_URL=$VITE_API_URL

# Roda o build (Gera a pasta 'dist')
RUN npm run build

# Estágio 2: Servir com Nginx
FROM nginx:alpine

# Copia os arquivos compilados (em Vite a pasta padrão é 'dist', não 'build')
COPY --from=build /app/dist /usr/share/nginx/html

# Remove a config padrão e adiciona a nossa
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]