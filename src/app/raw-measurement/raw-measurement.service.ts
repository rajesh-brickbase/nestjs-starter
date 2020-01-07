import {Injectable} from '@nestjs/common';
import {RawMeasurementRepository} from './raw-measurement.repository';
import {RawMeasurementBundleDto} from './dto/raw-measuerment-bundle.dto';
import {ResultDto} from '../../common/ResultDto';
import {EMPTY_DATA, EMPTY_DATA_MSG, SUCCESS, SUCCESS_MSG} from '../../config/constants';
import {AppLogger} from '../../config/log.config';
import {RawMeasurementDto} from './dto/raw-measurement.dto';
import {RawMeasurement} from './raw-measurement.entity';

@Injectable()
export class RawMeasurementService {

    private readonly logger = new AppLogger('RawMeasurementService');

    constructor(private repo: RawMeasurementRepository) {
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
    async createAsBundle(bundleDto: RawMeasurementBundleDto) {
        const resultDto = new ResultDto();
        if (!bundleDto || !bundleDto.dataPackets) {
            return resultDto.errorMessage(EMPTY_DATA_MSG);
        }
        const values = await this.repo.createMany(this.extractEntitiesFromDataPackets(bundleDto.dataPackets));
        return resultDto.successMessage(SUCCESS_MSG, values.length);
    }

    /**
     * Create  all records, which are available in array.
     * @param dtoList
     */
    async createMany(dtoList: RawMeasurementDto[]) {
        const resultDto = new ResultDto();
        const values = await this.repo.createMany(this.extractEntitiesFromDataPackets(dtoList));
        return resultDto.successMessage(SUCCESS_MSG, values.length);
    }

    private extractEntitiesFromDataPackets(dataPackets: RawMeasurementDto[]): RawMeasurement[] {
        let toEntityFn = this.toEntity;
        let entities = Array<RawMeasurement>();
        dataPackets.forEach(function(item) {
            entities.push(toEntityFn(item));
        });
        return entities;
    }

    private toEntity(dto): RawMeasurement {
        const entity = new RawMeasurement();
        entity.srcMacId = dto.srcMacId;
        entity.timestamp = new Date(parseInt(dto.unixTimestamp) * 1000);
        entity.streamIndex = dto.streamIndex;
        entity.measurementType = dto.measurementType;
        entity.measurementValue = dto.measurementValue;
        entity.positionId = dto.positionId;
        return entity;
    }

}
