import { NestFactory } from '@nestjs/core'; // Permite crear la aplicacion Nest
import { AppModule } from './app.module'; // es el módulo raíz del proyecto.
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger" // se usan para documentar la API con Swagger.

async function bootstrap() { // Es una función asincrónica que arranca la aplicación.

  const app = await NestFactory.create(AppModule); // Se crea una instancia de la aplicación a partir del módulo raíz (AppModule).
  const config = new DocumentBuilder() // Se construye un documento Swagger con el patrón Builder.  
  //Se definen metadatos para la API (título, descripción y versión)..setTitle("Autolink")
    .setDescription("The Autolink API description")
    .setVersion("0.1")
    .build();

    //Creo el documento con SwaggerModuler
    const document = SwaggerModule.createDocument(app,config);// genera el documento Swagger a partir de la app y la config.
    SwaggerModule.setup("autolink",app,document); // sirve la documentación Swagger en el endpoint localhost:3000/autolink.
  await app.listen(process.env.PORT ?? 3000); //Se inicia la aplicación en el puerto definido en la variable de entorno PORT (si no existe, usa el 3000 por defecto).


}
bootstrap();
