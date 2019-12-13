import {Injectable} from '@nestjs/common';
import {RawMeasurementRepository} from './raw-measurement.repository';
import {RawMeasurementBundleDto} from './dto/raw-measuerment-bundle.dto';
import {ResultDto} from '../../common/ResultDto';
import {EMPTY_DATA, EMPTY_DATA_MSG, SUCCESS, SUCCESS_MSG} from '../../config/constants';

@Injectable()
export class RawMeasurementService {

    constructor(private repo: RawMeasurementRepository) {
    }

    async defaultMessage() {
        const resultDto = new ResultDto();
        return resultDto.defaultStatus();
    }

    async createAsBundle(bundleDto: RawMeasurementBundleDto) {
        const resultDto = new ResultDto();
        if (!bundleDto || !bundleDto.dataPackets) {
            resultDto.message = EMPTY_DATA_MSG;
            resultDto.status = EMPTY_DATA;
            return resultDto;
        }
        const values = await this.repo.createMany(bundleDto.dataPackets);

        resultDto.message = SUCCESS_MSG;
        resultDto.status = SUCCESS;
        resultDto.data = values.length;
        return resultDto;
    }
}
