import {Controller, Get, HttpCode, HttpStatus, UseFilters} from '@nestjs/common';
import {ResultDto} from '../../common/ResultDto';
import {AppLogger} from '../../config/log.config';
import {HttpExceptionFilter} from '../../exception/http-exception-filter';
import {ApiTags} from '@nestjs/swagger';
import {NodeMetaDataService} from './node-meta-data.service';

@UseFilters(new HttpExceptionFilter())
@ApiTags('Node Metadata')
@Controller('node-meta-data')
export class NodeMetadataController {

    private readonly logger = new AppLogger('NodeMetadataController');

    constructor(private nodeMetaDataService: NodeMetaDataService) {
    }

    @Get('/index')
    @HttpCode(HttpStatus.OK)
    getAll(): Promise<ResultDto> {
        return this.nodeMetaDataService.defaultMessage();
    }

}
