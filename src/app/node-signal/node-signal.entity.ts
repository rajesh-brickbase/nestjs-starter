import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('node_signal')
export class NodeSignal {

    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column( {name: "first_name", length: 255})
    firstName: string;

}
