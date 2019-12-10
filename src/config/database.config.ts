import {DynamicModule, Logger} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NodeSignal} from '../app/node-signal/node-signal.entity';

const entitiesList = [NodeSignal];

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
            host: 'localhost',
            port: 5432,
            database: 'postgres',
            username: 'devuser',
            password: 'devuser',
            entities: entitiesList,
            synchronize: true, // for DEV only
            keepConnectionAlive: true,
        });
    }
}
