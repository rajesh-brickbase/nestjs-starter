import {DynamicModule, Logger} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NodeSignal} from '../app/node-signal/node-signal.entity';
import {RawMeasurement} from '../app/raw-measurement/raw-measurement.entity';
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} from './constants';

const entitiesList = [NodeSignal, RawMeasurement];

// let entitiesList = [__dirname + '/../**/*.entity{.ts,.js}'];
// let repoList = [__dirname + '/../**/*.repository{.ts,.js}'];
// entitiesList =entitiesList.concat(repoList);
// entities: [__dirname + '/../**/*.entity{.ts,.js}'],

/**
 * Handle Database connection.
 */
export class DBProviderModule {

    static forConnection(): DynamicModule {

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
