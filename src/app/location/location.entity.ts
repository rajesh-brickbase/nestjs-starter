import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('locations_poc')
export class Location {

    @PrimaryColumn({name: 'location_id', type: 'uuid'})
    locationId: string;

    @Column({name: 'location_name', type: 'text'})
    locationName: string;

}
