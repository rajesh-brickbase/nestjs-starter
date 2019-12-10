import {EntityRepository, Repository} from 'typeorm';
import {NodeSignal} from './node-signal.entity';

@EntityRepository(NodeSignal)
export class NodeSignalRepository extends Repository<NodeSignal> {

    async findAll(): Promise<NodeSignal[]> {
        let values = await this.find();
        console.log('Data from DB ', values);
        return values;
    }

    async createOne(dto): Promise<NodeSignal> {
        return await this.save(dto);
    }

}
