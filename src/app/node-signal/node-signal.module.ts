import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NodeSignal} from './node-signal.entity';
import {NodeSignalRepository} from './node-signal.repository';
import {NodeSignalService} from './node-signal.service';
import {NodeSignalController} from './node-signal.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([NodeSignal, NodeSignalRepository]),
    ],
    providers: [NodeSignalService],
    controllers: [NodeSignalController],
})
export class NodeSignalModule {
}
