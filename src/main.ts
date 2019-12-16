import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SwaggerConfig} from './config/swagger.config';
import {AppLogger} from './config/log.config';

async function bootstrap() {

    const appModule = await NestFactory.create(AppModule, {
        logger: new AppLogger('bootstrap'),
    });
    appModule.setGlobalPrefix('api/v2');

    // Configuration of Swagger API
    SwaggerConfig.create(appModule);

    await appModule.listen(4050);
}

bootstrap();
