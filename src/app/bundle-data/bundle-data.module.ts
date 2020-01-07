import {Module} from '@nestjs/common';
import {BundleDataController} from './bundle-data.controller';
import {BundleDataService} from './bundle-data.service';
import {RawMeasurementModule} from '../raw-measurement/raw-measurement.module';
import {NodeMetaDataModule} from '../node-meta-data/node-meta-data.module';

@Module({
    imports: [RawMeasurementModule, NodeMetaDataModule],
    controllers: [BundleDataController],
    providers: [BundleDataService]
})
export class BundleDataModule {
}
