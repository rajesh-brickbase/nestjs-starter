import {Injectable} from '@nestjs/common';
import {RawMeasurementRepository} from './raw-measurement.repository';
import {RawMeasurementBundleDto} from './dto/raw-measuerment-bundle.dto';
import {ResultDto} from '../../common/ResultDto';
import {EMPTY_DATA, EMPTY_DATA_MSG, SUCCESS, SUCCESS_MSG} from '../../config/constants';
import {AppLogger} from '../../config/log.config';

@Injectable()
export class RawMeasurementService {

    private readonly logger = new AppLogger('RawMeasurementService');

    constructor(private repo: RawMeasurementRepository) {
    }

    async defaultMessage() {
        const resultDto = new ResultDto();
        return resultDto.defaultStatus();
    }

    async createAsBundle(bundleDto: RawMeasurementBundleDto) {

        this.logger.logObject('Value of this ', bundleDto);

        const resultDto = new ResultDto();
        if (!bundleDto || !bundleDto.dataPackets) {
            resultDto.message = EMPTY_DATA_MSG;
            resultDto.status = EMPTY_DATA;
            return resultDto;
        }

        // updating value for item
        bundleDto.dataPackets.forEach(function(item) {
            console.log('Item value ', item);
            // below unix time stamp
            item.timestampAsISO = new Date(parseInt(item.timestamp) * 1000).toISOString();
            if (item.value) {
                item.measurementValue = item.value;
            }else{
                item.measurementValue ='0';
            }
        });

        const values = await this.repo.createMany(bundleDto.dataPackets);

        resultDto.message = SUCCESS_MSG;
        resultDto.status = SUCCESS;
        resultDto.data = values.length;
        return resultDto;
    }
}
