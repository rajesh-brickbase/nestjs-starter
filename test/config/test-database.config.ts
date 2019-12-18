import {DynamicModule, Logger} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RawMeasurement} from '../../src/app/raw-measurement/raw-measurement.entity';

const entitiesList = [RawMeasurement];

// let entitiesList = [__dirname + '/../**/*.entity{.ts,.js}'];
// let repoList = [__dirname + '/../**/*.repository{.ts,.js}'];
// entitiesList =entitiesList.concat(repoList);
// entities: [__dirname + '/../**/*.entity{.ts,.js}'],

/**
 * Handle Database connection.
 */
export class TestDBProviderModule {

    static forConnection(): DynamicModule {

        const DB_HOST: string = 'localhost';
        const DB_PORT: number = 5432;
        const DB_NAME = 'postgres';
        const DB_USERNAME = 'devuser';
        const DB_PASSWORD = 'devuser';

        Logger.log('entities : {}' + entitiesList);

        return TypeOrmModule.forRoot({
            type: 'postgres',
            host: DB_HOST,
            port: DB_PORT,
            database: DB_NAME,
            username: DB_USERNAME,
            password: DB_PASSWORD,
            entities: entitiesList,
            synchronize: true, // for DEV only
            keepConnectionAlive: true,
        });
    }

//     entities: [
//         __dirname + "/entity/*.js"
// ]
}
