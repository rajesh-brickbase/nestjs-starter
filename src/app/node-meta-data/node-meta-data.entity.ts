import {BeforeInsert, Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('node_meta_data_poc')
export class NodeMetaData {

    @PrimaryColumn({name: 'time', type: 'timestamp'})
    timestamp: Date;

    @PrimaryColumn({name: 'node_mac_id', type: 'text'})
    nodeMacId: string;

    @PrimaryColumn({name: 'measurement_type', type: 'text'})
    measurementType: string;

    @Column({name: 'measurement_value', type: 'numeric'})
    measurementValue: string;

    @BeforeInsert()
    beforeInsert() {
    }

}
