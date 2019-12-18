import {BeforeInsert, Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('raw_measurements_poc')
export class RawMeasurement {

    @PrimaryColumn({name: 'time', type: 'timestamp'})
    timestampAsISO: string;

    @PrimaryColumn({name: 'src_mac_id', length: 255})
    srcMacId: string;

    @PrimaryColumn({name: 'stream_index', type: 'int4'})
    streamIndex: string;

    @PrimaryColumn({name: 'measurement_type', type: 'text'})
    measurementType: string;

    @Column({name: 'position_id', type: 'uuid'})
    positionId: string;

    @Column({name: 'measurement_value', type: 'numeric'})
    measurementValue: string;

    @BeforeInsert()
    beforeInsert() {
        console.log('Event before insert');
    }

}
