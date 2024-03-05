import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe, ClassSerializerInterceptor } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));


  app.enableCors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  });

  const config = new DocumentBuilder()
    .setTitle("Agua")
    .setDescription("The Agua API description")
    .setVersion("0.1")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(8080);
}
bootstrap();
