import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

/**
 * Swagger Configuration created here.
 */
export class SwaggerConfig {

  static create(app)  {
       const options = new DocumentBuilder()
           .setTitle('Data Ingestion Service Interface API')
           .setVersion('2.0')
           .build();
       const document = SwaggerModule.createDocument(app, options);
       SwaggerModule.setup('api/swagger', app, document);
   }

}
