# Instruções para habilitar e testar o Swagger

Passos rápidos para habilitar a documentação Swagger localmente:

1. Instale as dependências novas (na raiz do projeto):

```bash
npm install
# ou, para instalar apenas os pacotes do Swagger:
npm install @nestjs/swagger@^6.5.0 swagger-ui-express@^4.6.2 --save
```

2. Rode uma build ou start em desenvolvimento:

```bash
npm run build
npm run start:dev
```

3. Abra no navegador:

http://localhost:3000/api/docs

Notas:
- As alterações no código adicionaram decoradores `@ApiProperty` e `@ApiTags` nos DTOs e controllers.
- Se o TypeScript reclamar de tipos ausentes, execute `npm install` e depois `npm run build`.
