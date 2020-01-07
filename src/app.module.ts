import {Module} from '@nestjs/common';
import {NodeSignalModule} from './app/node-signal/node-signal.module';
import {ConfigModule} from './config/configuration.module';
import {DefaultModule} from './app/default/default.module';
import {RawMeasurementModule} from './app/raw-measurement/raw-measurement.module';
import {NodeMetaDataModule} from './app/node-meta-data/node-meta-data.module';
import { BundleDataModule } from './app/bundle-data/bundle-data.module';

@Module({
    imports: [
        ConfigModule,
        DefaultModule,
        NodeSignalModule,
        RawMeasurementModule,
        NodeMetaDataModule,
        BundleDataModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
