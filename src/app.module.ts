import {Module} from '@nestjs/common';
import {NodeSignalModule} from './app/node-signal/node-signal.module';
import {ConfigModule} from './config/configuration.module';
import {DefaultModule} from './app/default/default.module';

@Module({
    imports: [
        ConfigModule,
        DefaultModule,
        NodeSignalModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
