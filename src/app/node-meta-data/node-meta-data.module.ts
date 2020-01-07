import {Module} from '@nestjs/common';
import {NodeMetaDataService} from './node-meta-data.service';
import {NodeMetadataController} from './node-metadata.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NodeMetaData} from './node-meta-data.entity';
import {NodeMetaDataRepository} from './node-meta-data.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([NodeMetaData, NodeMetaDataRepository]),
    ],
    providers: [NodeMetaDataService],
    controllers: [NodeMetadataController],
    exports: [NodeMetaDataService]
})
export class NodeMetaDataModule {
}
