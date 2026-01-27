# Next-Event

Projeto para gerenciamento de eventos e certificados.

## Como Rodar o Projeto

Siga os passos abaixo para subir o ambiente utilizando Docker:

### 1. Configurar Variáveis de Ambiente
Antes de rodar o Docker, você precisa configurar as variáveis de ambiente.
Na pasta `Next-Event`, existe um arquivo chamado `.env.example`. 

1. Crie o arquivo `.env` para o Docker (Obrigatório):
   ```bash
   cp Next-Event/.env.example Next-Event/.env
   ```
2. Crie o arquivo `.env` para testes locais (Opcional - necessário para rodar `npm test` fora do Docker):
   ```bash
   cp Next-Event/.env.example Next-Event/BackEnd/.env
   ```
3. Abra os arquivos `.env` criados e preencha as senhas e chaves secretas.

### 2. Rodar com Docker
Certifique-se de que as portas **3000** (Backend) e **4000** (Frontend) estejam livres em sua máquina.

Na pasta raiz, execute:
```bash
docker compose up --build -d
```

### 3. Acessar a Aplicação
- **Frontend**: [http://localhost:4000](http://localhost:4000)
- **Backend API**: [http://localhost:3000](http://localhost:3000)
- **Documentação API (Swagger)**: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

### 4. Rodar Testes (Localmente)
Para rodar os testes, acesse a pasta do BackEnd, instale as dependências e execute:
```bash
cd Next-Event/BackEnd
npm install
npm test
```
*Nota: Certifique-se de que o container do banco de dados esteja rodando.*
