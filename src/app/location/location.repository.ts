import {EntityRepository, Repository} from 'typeorm';
import {Location} from './location.entity';

@EntityRepository(Location)
export class LocationRepository extends Repository<Location> {

    async findOneByCriteria(entity): Promise<Location> {
       return await this.findOne(entity);
    }

}
