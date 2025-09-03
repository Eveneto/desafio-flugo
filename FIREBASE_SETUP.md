# 🔥 Configuração Firebase - Passo a Passo

## 1. Criar Projeto Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Criar projeto" ou "Add project"
3. Digite o nome: **`desafio-flugo`** (ou qualquer nome de sua escolha)
4. Desabilite Google Analytics (opcional para este projeto)
5. Clique em "Criar projeto"

## 2. Configurar Firestore Database

1. No painel esquerdo, clique em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Escolha **"Iniciar em modo de teste"** (permite leitura/escrita por 30 dias)
4. Escolha a localização: **`southamerica-east1 (São Paulo)`**
5. Clique em "Concluído"

## 3. Criar App Web

1. Na página inicial do projeto, clique no ícone **"</>"** (Web)
2. Digite o nome do app: **`desafio-flugo-web`**
3. **NÃO** marque "Firebase Hosting" (faremos deploy depois)
4. Clique em "Registrar app"
5. **COPIE as credenciais que aparecem na tela** - você precisará delas!

## 4. Configurar Variáveis de Ambiente

1. Na pasta do projeto, crie um arquivo `.env` (sem .example)
2. Cole as credenciais do Firebase seguindo este formato:

\`\`\`env
VITE_FIREBASE_API_KEY=sua-api-key-aqui
VITE_FIREBASE_AUTH_DOMAIN=seu-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-project-id
VITE_FIREBASE_STORAGE_BUCKET=seu-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu-messaging-sender-id
VITE_FIREBASE_APP_ID=sua-app-id
\`\`\`

## 5. Exemplo de Credenciais

As credenciais do Firebase Console ficarão assim:
\`\`\`javascript
const firebaseConfig = {
  apiKey: "AIzaSyBrHrUFJ_z9QGxK8L9E3wX5R4M2N6vP1qS",
  authDomain: "desafio-flugo-12345.firebaseapp.com",
  projectId: "desafio-flugo-12345",
  storageBucket: "desafio-flugo-12345.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012345"
};
\`\`\`

Converta para o formato `.env`:
\`\`\`env
VITE_FIREBASE_API_KEY=AIzaSyBrHrUFJ_z9QGxK8L9E3wX5R4M2N6vP1qS
VITE_FIREBASE_AUTH_DOMAIN=desafio-flugo-12345.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=desafio-flugo-12345
VITE_FIREBASE_STORAGE_BUCKET=desafio-flugo-12345.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef123456789012345
\`\`\`

## 6. Testar a Conexão

1. Reinicie o servidor de desenvolvimento:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Abra o projeto no navegador
3. Cadastre um novo colaborador
4. Verifique no Firebase Console se os dados aparecem em **Firestore Database > Dados**

## 7. Estrutura dos Dados

Os dados serão salvos na coleção **`colaboradores`** com esta estrutura:
\`\`\`json
{
  "nome": "João Silva",
  "email": "joao@empresa.com", 
  "departamento": "TI",
  "ativo": true,
  "createdAt": "2025-09-03T10:30:00.000Z"
}
\`\`\`

## 8. Regras de Segurança (Opcional)

Para produção, configure regras mais restritivas no Firestore:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /colaboradores/{document=**} {
      allow read, write: if true; // Temporário para desenvolvimento
    }
  }
}
\`\`\`

## ✅ Checklist

- [ ] Projeto Firebase criado
- [ ] Firestore Database configurado
- [ ] App Web registrado
- [ ] Credenciais copiadas
- [ ] Arquivo `.env` criado
- [ ] Servidor reiniciado
- [ ] Teste de cadastro realizado
- [ ] Dados visíveis no Firebase Console

## 🚨 Troubleshooting

**Erro: "Firebase config object is invalid"**
- Verifique se todas as variáveis de ambiente estão definidas
- Confirme se o arquivo `.env` está na raiz do projeto
- Reinicie o servidor após criar o `.env`

**Erro: "Missing or insufficient permissions"**
- Confirme que o Firestore está em modo de teste
- Verifique se as regras de segurança permitem leitura/escrita

**Dados não aparecem na lista**
- Abra o DevTools > Console para ver erros
- Verifique se os dados estão sendo salvos no Firebase Console
- Confirme a estrutura dos dados na coleção "colaboradores"
