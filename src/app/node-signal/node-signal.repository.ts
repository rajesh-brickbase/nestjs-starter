import {EntityRepository, Repository} from 'typeorm';
import {NodeSignal} from './node-signal.entity';

@EntityRepository(NodeSignal)
export class NodeSignalRepository extends Repository<NodeSignal> {

    async findAll(): Promise<NodeSignal[]> {
        const values = await this.find();
        return values;
    }

    async createOne(dto): Promise<NodeSignal> {
        return await this.save(dto);
    }

}
