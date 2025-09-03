# Desafio Flugo - Cadastro de Funcionários

Este projeto é um formulário de cadastro de funcionários em múltiplas etapas (multi-step), desenvolvido para o desafio técnico da Flugo. Utiliza ReactJS, TypeScript, Material UI para estilização e Firebase para persistência dos dados.

## 🚀 Funcionalidades

- ✅ Formulário multi-step (2 etapas)
- ✅ Interface visual fiel ao protótipo fornecido  
- ✅ Validações em tempo real
- ✅ Persistência de dados com Firebase
- ✅ Carregamento e exibição de colaboradores
- ✅ Design responsivo
- ✅ Feedback visual (loading, success, error)

## 🛠️ Tecnologias Utilizadas

- **React 19** com **TypeScript**
- **Material UI v7** para componentes
- **Firebase Firestore** para persistência
- **Vite** como bundler
- **ESLint** para linting

## 📋 Como rodar localmente

### 1. Pré-requisitos
- Node.js >= 18
- npm >= 9
- Conta no Firebase (opcional para teste)

### 2. Clone o repositório
```bash
git clone https://github.com/seu-usuario/desafio-flugo.git
cd desafio-flugo
```

### 3. Instale as dependências
```bash
npm install
```

### 4. Configure o Firebase
1. Siga o guia completo: [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md)
2. Crie um arquivo `.env` na raiz do projeto:
```env
VITE_FIREBASE_API_KEY=sua-api-key
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto-id
VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

> **Nota**: O projeto funciona sem Firebase configurado, usando dados de exemplo.

### 5. Inicie o projeto
```bash
npm run dev
```

### 6. Acesse no navegador
O app estará disponível em `http://localhost:5173`

## 🔥 Configuração do Firebase

Se quiser testar a persistência real, edite o arquivo `src/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-project-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "sua-app-id"
};
```

## 📱 Funcionalidades do Sistema

### Lista de Colaboradores
- Exibe colaboradores existentes (mock + Firebase)
- Loading state durante carregamento
- Tratamento de erros de conexão
- Interface limpa e moderna

### Formulário Multi-Step
- **Etapa 1**: Informações Básicas (Nome, Email, Status)
- **Etapa 2**: Informações Profissionais (Departamento)
- Validações em tempo real
- Progress bar visual
- Estados de loading no envio
- Notificações de sucesso/erro

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── App.tsx              # Componente principal
│   ├── Sidebar.tsx          # Barra lateral com logo
│   ├── EmployeeList.tsx     # Lista de colaboradores
│   ├── MultiStepForm.tsx    # Formulário multi-step
│   ├── EmployeeFormStep1.tsx # Primeira etapa do form
│   └── EmployeeFormStep2.tsx # Segunda etapa do form
├── firebase.ts              # Configuração e funções Firebase
├── index.css               # Estilos globais
└── main.tsx                # Entry point
```

## 🎨 Design System

O projeto implementa fielmente o protótipo fornecido:
- Cores: Verde primário (#10B981), cinzas da palette Tailwind
- Typography: Hierarquia clara e consistente  
- Componentes: Material UI customizados
- Layout: Responsivo e acessível

## 📦 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build para produção  
npm run preview  # Preview do build
npm run lint     # Executar linting
```

## 🚀 Deploy

Para fazer deploy do projeto:

1. Configure as variáveis de ambiente do Firebase
2. Execute `npm run build`
3. Deploy na plataforma de sua escolha (Vercel, Netlify, etc.)

## ✅ Requisitos Atendidos

- ✅ Formulário multi-step
- ✅ ReactJS com TypeScript
- ✅ Material UI para estilização
- ✅ Interface fiel ao protótipo
- ✅ Validações e feedback entre etapas
- ✅ Todos os campos obrigatórios
- ✅ Persistência Firebase
- ✅ README com instruções

---

**Desenvolvido para o Desafio Flugo** 🚀
