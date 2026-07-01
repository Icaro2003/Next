# 📋 Requisitos Funcionais (RF) - Sistema Next-Event (Interface do Frontend)

Este documento descreve os **Requisitos Funcionais (RF)** do sistema **Next-Event** que estão atualmente **implementados e funcionais na interface do usuário (Frontend)**. 

Os requisitos listados a seguir definem as ações que os **Alunos**, **Bolsistas**, **Tutores** e **Coordenadores** podem realizar diretamente no portal web do sistema.

---

## 👥 Perfis de Usuário (Atores no Frontend)

1. **Aluno (Regular):** Discente participante de atividades acadêmicas que utiliza a plataforma para acompanhar suas atividades e enviar certificados.
2. **Bolsista (Aluno com Bolsa):** Aluno com bolsa de estudos que possui acesso às funcionalidades básicas de discente e à avaliação do projeto de tutoria.
3. **Tutor:** Docente ou orientador responsável pelo acompanhamento de um grupo de alunos.
4. **Coordenador:** Administrador da tutoria. Responsável por alocações, configurações de períodos e validação manual de certificados.

---

## 🛠️ Requisitos Funcionais por Perfil (Frontend)

### 1. Funcionalidades para Alunos e Bolsistas

| ID | Requisito Funcional | Descrição | Regras de Negócio / Detalhes no Frontend |
| :--- | :--- | :--- | :--- |
| **RF05** | **Upload de Certificados** | Permite ao aluno enviar arquivos PDF de certificados de atividades complementares. | - O aluno seleciona um arquivo e preenche os campos correspondentes (título, categoria, instituição, datas e carga horária) ou deixa que o sistema processe automaticamente. |
| **RF07** | **Leitura e Processamento de PDF** | O sistema processa o arquivo PDF no backend para extrair automaticamente metadados do certificado. | - Caso o aluno não insira manualmente os dados (carga horária, datas), o backend realiza o parsing do PDF e os dados resultantes são exibidos nos cards do certificado no frontend. |
| **RF09** | **Acesso Restrito aos Certificados** | O aluno visualiza e gerencia exclusivamente a listagem dos seus próprios certificados. | - A listagem exibe o status de validação (`Aprovado`, `Negado` ou `Em espera`) e, em caso de reprovação, a justificativa do avaliador. |
| **RF15** | **Consulta de Carga Horária Mínima** | Visualização do progresso do aluno em relação à carga horária mínima exigida. | - Exibe uma barra de progresso calculando a quantidade de horas aprovadas versus a meta estipulada para o período de tutoria. |
| **RF_AV** | **Avaliação do Projeto de Tutoria (Bolsista)** | Preenchimento do formulário de avaliação do programa de tutoria. | - Funcionalidade exclusiva para o perfil **Bolsista**. Permite avaliar o nível de satisfação, as principais dificuldades enfrentadas no período e se recomenda o programa. |

---

### 2. Funcionalidades para Tutores

| ID | Requisito Funcional | Descrição | Regras de Negócio / Detalhes no Frontend |
| :--- | :--- | :--- | :--- |
| **RF10** | **Visualização de Alunos Alocados** | O tutor visualiza a lista e os registros de todos os alunos sob sua responsabilidade. | - Exibe os dados do tutorando, a data do último acompanhamento e atalhos para preenchimento de novos relatórios e visualização de históricos. |
| **RF11** | **Formulário de Acompanhamento do Tutor** | Preenchimento periódico do relatório de monitoramento de cada aluno tutorado. | - O tutor registra a modalidade de reunião (VIRTUAL ou PRESENCIAL), a quantidade de encontros presenciais/virtuais realizados, a dificuldade do aluno e uma descrição detalhada. |

---

### 3. Funcionalidades para Coordenadores

| ID | Requisito Funcional | Descrição | Regras de Negócio / Detalhes no Frontend |
| :--- | :--- | :--- | :--- |
| **RF15_C** | **Definição de Carga Horária Mínima** | Cadastro e edição da carga horária mínima necessária por categoria em cada período letivo. | - Gerenciado no painel de **Predefinições** do coordenador. |
| **RF16** | **Alocação de Alunos a Tutores** | Ferramenta para associar alunos a seus respectivos tutores para um determinado período. | - Permite criar ou remover vínculos tutor-aluno vinculados a um período ativo, gerenciados no painel de **Predefinições**. |
| **RF19** | **Validação Manual de Certificados** | O coordenador analisa os certificados e decide se aprova ou rejeita os documentos. | - Permite a visualização do arquivo PDF diretamente.<br>- Em caso de reprovação, abre um modal para seleção ou descrição de um motivo de negativa. |
| **RF_GC** | **Gestão de Períodos de Tutoria** | Cadastro e edição de datas dos períodos de tutoria. | - Gerenciado no painel de **Predefinições**, definindo períodos ativos e inativos no sistema. |
| **RF_GU** | **Gestão de Usuários (Atribuição de Papel)** | Atribuição e alteração de papéis (roles) para os usuários. | - Permite alterar o papel de usuários cadastrados para `Aluno`, `Tutor` ou `Bolsista`. |

---

### 4. Requisitos Gerais de Sistema (Segurança)

| ID | Requisito Funcional | Descrição | Regras de Negócio / Detalhes no Frontend |
| :--- | :--- | :--- | :--- |
| **RF_AUTH** | **Controle de Acesso por Papel (RBAC)** | Restrição de acesso a telas e rotas com base no papel (role) do usuário logado. | - Redireciona o usuário para a tela de login caso tente acessar páginas para as quais não possui permissions (ex: aluno tentando acessar páginas de coordenador). |

---

## 📊 Matriz de Rastreabilidade e Status no Frontend

Status de implementação das telas e serviços que dão suporte aos requisitos listados:

| Requisito | Descrição | Status no Frontend | Componente / Página no Frontend |
| :---: | :--- | :---: | :--- |
| **RF05** | Upload de Certificados |  **Implementado** | [MeusCertificados.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/MeusCertificados.jsx) |
| **RF07** | Leitura Automática de PDF |  **Implementado (Backend/Exibido no Card)** | [MeusCertificados.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/MeusCertificados.jsx) \| [ValidarCertificados.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/ValidarCertificados.jsx) |
| **RF09** | Restrição de Certificados |  **Implementado** | [MeusCertificados.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/MeusCertificados.jsx) |
| **RF10** | Tutor visualizar Alunos |  **Implementado** | [AlunosTutor.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/AlunosTutor.jsx) |
| **RF11** | Formulário de Acompanhamento |  **Implementado** | [FormsTutor.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/FormsTutor.jsx) |
| **RF15** | Carga Horária Mínima (Aluno) |  **Implementado** | [MeusCertificados.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/MeusCertificados.jsx) \| [HomeAluno.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/HomeAluno.jsx) |
| **RF15_C**| Definição de Horas Mínimas |  **Implementado** | [Predefinicoes.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/Predefinicoes.jsx) |
| **RF16** | Alocação Tutor-Aluno |  **Implementado** | [Predefinicoes.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/Predefinicoes.jsx) |
| **RF19** | Validação de Certificados |  **Implementado** | [ValidarCertificados.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/ValidarCertificados.jsx) |
| **RF_AV** | Avaliação da Tutoria (Bolsista) |  **Implementado** | [AvaliacaoTutoria.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/AvaliacaoTutoria.jsx) |
| **RF_GC** | Gestão de Períodos |  **Implementado** | [Predefinicoes.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/Predefinicoes.jsx) |
| **RF_GU** | Gestão de Usuários (Papéis) |  **Implementado** | [AtribuirPapel.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/pages/AtribuirPapel.jsx) |
| **RF_AUTH**| Controle de Acesso (RBAC) |  **Implementado** | [useAuthenticatedUser.jsx](file:///home/icaro/Área de trabalho/Projects/Next/Next-Event/FrontEnd/src/hooks/useAuthenticatedUser.jsx) |
