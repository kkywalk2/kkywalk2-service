import { NestFactory, Reflector } from '@nestjs/core';
import { ApiModule } from '@app/api/api.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  const config = new DocumentBuilder()
    .setTitle('kkywalk2 service')
    .setDescription('kkywalk2 service API description')
    .setVersion('0.1')
    .addTag('kkywalk2')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  if (process.env.NODE_ENV == 'production') {
    app.setGlobalPrefix('kkywalk2-service/api');
    SwaggerModule.setup('kkywalk2-service/api/swagger', app, document);
  } else {
    SwaggerModule.setup('swagger', app, document);
  }

  registerGlobals(app);
  await app.listen(3000);
}

export function registerGlobals(app: INestApplication) {
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
      strategy: 'excludeAll',
      excludeExtraneousValues: true,
    }),
  );
}

bootstrap();
