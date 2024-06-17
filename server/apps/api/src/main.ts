import { NestFactory } from '@nestjs/core';
import { ApiModule } from '@app/api/api.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  const config = new DocumentBuilder()
    .setTitle('kkywalk2 service')
    .setDescription('kkywalk2 service API description')
    .setVersion('0.1')
    .addTag('kkywalk2')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  if (process.env.NODE_ENV == "production") {
    app.setGlobalPrefix("kkywalk2-service/api");
    SwaggerModule.setup('kkywalk2-service/api/swagger', app, document);
  } else {
    SwaggerModule.setup('swagger', app, document);
  }

  await app.listen(3000);
}
bootstrap();
