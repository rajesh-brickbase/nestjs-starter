import {Injectable} from '@nestjs/common';
import {AppLogger} from '../../config/log.config';
import {LocationRepository} from './location.repository';

@Injectable()
export class LocationService {

    private readonly logger = new AppLogger('LocationService');

    constructor(private repo: LocationRepository) {
    }

    /**
     * Validate locationId exist or not.
     * @param locationId
     */
    async isLocationIdExist(locationId): Promise<boolean> {
        const value = await this.repo.findOneByCriteria({locationId: locationId});
        if (value && value.locationId) {
            return true;
        }
        return false;
    }
}
