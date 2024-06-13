import { NestFactory } from '@nestjs/core';
import { ApiModule } from '@app/api/api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  
  if(process.env.NODE_ENV == "production")
    app.setGlobalPrefix("kkywalk2-service/api")
  
  await app.listen(3000);
}
bootstrap();
