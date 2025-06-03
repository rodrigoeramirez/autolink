import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger"

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder() // Utiliza el patron de diseño builder
    .setTitle("Autolink")
    .setDescription("The Autolink API description")
    .setVersion("0.1")
    .build();

    //Creo el documento con SwaggerModuler
    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup("autolink",app,document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
