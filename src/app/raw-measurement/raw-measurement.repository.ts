import {EntityRepository, Repository} from 'typeorm';
import {RawMeasurement} from './raw-measurement.entity';

@EntityRepository(RawMeasurement)
export class RawMeasurementRepository extends Repository<RawMeasurement> {

    async findAll(): Promise<RawMeasurement[]> {
        const values = await this.find();
        return values;
    }

    async createOne(dto): Promise<RawMeasurement> {
        return await this.save(dto);
    }

    async createMany(dtoList): Promise<RawMeasurement[]> {
        return await this.save(dtoList);
    }

    async findOneByCriteria(entity ): Promise<RawMeasurement> {
        const value = await this.findOne(entity);
        return value;
    }
}
