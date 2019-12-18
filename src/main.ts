import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SwaggerConfig} from './config/swagger.config';
import {AppLogger} from './config/log.config';
import {APP_PORT} from './config/constants';
import * as bodyParser from 'body-parser';

async function bootstrap() {

    const appModule = await NestFactory.create(AppModule, {
        logger: new AppLogger('bootstrap'),
        bodyParser: false
    });

    appModule.setGlobalPrefix('api/v2');

    appModule.use(bodyParser.json());

    // Configuration of Swagger API
    SwaggerConfig.create(appModule);

    await appModule.listen(APP_PORT);
}

bootstrap();
