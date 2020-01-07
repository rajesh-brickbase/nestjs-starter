import {Body, Controller, Get, HttpCode, HttpStatus, Post, UseFilters} from '@nestjs/common';
import {HttpExceptionFilter} from '../../exception/http-exception-filter';
import {ApiTags} from '@nestjs/swagger';
import {ResultDto} from '../../common/ResultDto';
import {BundleDataService} from './bundle-data.service';
import {BundleDataDto} from './dto/bundle-data.dto';
import {AppLogger} from '../../config/log.config';

@UseFilters(new HttpExceptionFilter())
@ApiTags('Bundle Data')
@Controller('bundle-data')
export class BundleDataController {

    private readonly logger = new AppLogger('BundleDataController');

    constructor(private bundleDataService: BundleDataService) {
    }

    @Get('/index')
    @HttpCode(HttpStatus.OK)
    getAll(): Promise<ResultDto> {
        return this.bundleDataService.defaultMessage();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createMany(@Body() bundleDataDto: BundleDataDto): Promise<ResultDto> {
        this.logger.logObject('Received Request Message', bundleDataDto);
        return this.bundleDataService.createAsBundle(bundleDataDto);
    }

}
