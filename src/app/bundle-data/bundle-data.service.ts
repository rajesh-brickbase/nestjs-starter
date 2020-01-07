import {Injectable} from '@nestjs/common';
import {AppLogger} from '../../config/log.config';
import {ResultDto} from '../../common/ResultDto';
import {EMPTY_DATA_MSG} from '../../config/constants';
import {BundleDataDto} from './dto/bundle-data.dto';
import {RawMeasurementService} from '../raw-measurement/raw-measurement.service';
import {NodeMetaDataService} from '../node-meta-data/node-meta-data.service';

@Injectable()
export class BundleDataService {

    private readonly logger = new AppLogger('BundleDataService');

    constructor(private rawMeasurementService: RawMeasurementService,
                private nodeMetaDataService :NodeMetaDataService) {
    }

    /**
     *  A default message and use in testing api.
     */
    async defaultMessage() {
        const resultDto = new ResultDto();
        return resultDto.defaultStatus();
    }

    /**
     * Create many records from Bundle of data
     * @param bundleDto
     */
    async createAsBundle(bundleDataDto: BundleDataDto) {
        let resultDto = new ResultDto();
        if (!bundleDataDto || !bundleDataDto.dataPackets) {
            return resultDto.errorMessage(EMPTY_DATA_MSG);
        }
        let values = [];
        switch (bundleDataDto.bundledDataType) {
            case 'raw_measurements':
                resultDto = await this.rawMeasurementService.createMany(bundleDataDto.dataPackets);
                break;
            case 'node_meta_data':
                resultDto = await this.nodeMetaDataService.createMany(bundleDataDto.dataPackets);
                break;
        }
        return resultDto;
    }

}
