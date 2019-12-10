import {Body, Controller, Get, HttpCode, HttpStatus, Post, UseFilters} from '@nestjs/common';
import {NodeSignalService} from './node-signal.service';
import {NodeSignal} from './node-signal.entity';
import {ApiTags} from '@nestjs/swagger';
import {NodeSignalDto} from './node-signal.dto';
import {HttpExceptionFilter} from '../../exception/http-exception-filter';

@UseFilters(new HttpExceptionFilter())
@Controller('node-signal')
@ApiTags('Node Signal')
export class NodeSignalController {

    constructor(private service: NodeSignalService) {
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    getAll(): Promise<NodeSignal[]> {
        return this.service.getData();
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    create(@Body() nodeSignalDto: NodeSignalDto): Promise<NodeSignalDto> {
        return this.service.create(nodeSignalDto);
    }

}
