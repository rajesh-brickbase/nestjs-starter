import {EntityRepository, Repository} from 'typeorm';
import {NodeMetaData} from './node-meta-data.entity';
import {RawMeasurement} from '../raw-measurement/raw-measurement.entity';

@EntityRepository(NodeMetaData)
export class NodeMetaDataRepository extends Repository<NodeMetaData> {

    async createMany(entityList): Promise<NodeMetaData[]> {
        return await this.save(entityList);
    }

}
