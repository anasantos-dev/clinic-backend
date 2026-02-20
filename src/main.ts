import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // ==========================================================
  //  CORS - permite conexão segura com o frontend Angular
  // ==========================================================
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // ==========================================================
  //  Swagger - documentação da API
  // ==========================================================

  // Configuração explícita com tipagem
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Clinic API')
    .setDescription('API da aplicação Clinic')
    .setVersion('1.0')
    .build();

  // Geração do documento
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  // Rota padrão do Swagger
  SwaggerModule.setup('api/docs', app, swaggerDocument);

  // ==========================================================
  //  Inicialização do servidor
  // ==========================================================
  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);

  console.log(` Clinic API rodando em: http://localhost:${PORT}`);
  console.log(` Swagger disponível em: http://localhost:${PORT}/api/docs`);
}

// ============================================================
//  Bootstrap com tratamento global de erros
// ============================================================
bootstrap().catch((err) => {
  console.error(' Erro ao iniciar a aplicação:', err);
  process.exit(1);
});
