import {Injectable} from '@nestjs/common';
import {AppLogger} from '../../config/log.config';
import {ResultDto} from '../../common/ResultDto';
import {NodeMetaDataRepository} from './node-meta-data.repository';
import {SUCCESS_MSG} from '../../config/constants';
import {NodeMetaDataDto} from './dto/node-meta-data.dto';
import {NodeMetaData} from './node-meta-data.entity';

@Injectable()
export class NodeMetaDataService {

    private readonly logger = new AppLogger('NodeMetaDataService');

    constructor(private repo: NodeMetaDataRepository) {
    }

    /**
     *  A default message and use in testing api.
     */
    async defaultMessage() {
        const resultDto = new ResultDto();
        return resultDto.defaultStatus();
    }

    /**
     * Create  all records, which are available in array.
     * @param dtoList
     */
    async createMany(dtoList: NodeMetaDataDto[]) {
        const resultDto = new ResultDto();
        const values = await this.repo.createMany(this.createEntityList(dtoList));
        return resultDto.successMessage(SUCCESS_MSG, values.length);
    }

    private createEntityList(dataPackets: NodeMetaDataDto[]): NodeMetaData[] {
        // let toEntityFn = this.toEntity;
        let entities = Array<NodeMetaData>();
        dataPackets.forEach(function(item) {
            entities.push(NodeMetaDataService.toEntity(item));
        });
        return entities;
    }

    private static toEntity(dto: NodeMetaDataDto): NodeMetaData {
        const entity = new NodeMetaData();
        entity.nodeMacId = dto.nodeMacId;
        entity.timestamp = new Date(parseInt(dto.unixTimestamp) * 1000);
        entity.measurementType = dto.measurementType;
        entity.measurementValue = dto.measurementValue;
        return entity;
    }

}
