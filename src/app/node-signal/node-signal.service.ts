import {Injectable} from '@nestjs/common';
import {NodeSignalRepository} from './node-signal.repository';
import {NodeSignalDto} from './node-signal.dto';

@Injectable()
export class NodeSignalService {

    constructor(private repo: NodeSignalRepository) {
    }

    async getData() {
        let values = await this.repo.findAll();
        console.log('Data from DB ', values);
        return values;
    }

    async create(nodeSignalDto)  {
        return this.repo.save(nodeSignalDto);
    }

}
