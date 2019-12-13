import {Body, Controller, Get, HttpCode, HttpStatus, Post, UseFilters} from '@nestjs/common';
import {HttpExceptionFilter} from '../../exception/http-exception-filter';
import {ApiTags} from '@nestjs/swagger';
import {RawMeasurementService} from './raw-measurement.service';
import {RawMeasurementBundleDto} from './dto/raw-measuerment-bundle.dto';
import {ResultDto} from '../../common/ResultDto';

@UseFilters(new HttpExceptionFilter())
@ApiTags('Raw Measurement')
@Controller('raw-measurement')
export class RawMeasurementController {

    constructor(private rawMeasurementService: RawMeasurementService) {
    }

    @Get('/index')
    @HttpCode(HttpStatus.OK)
    getAll(): Promise<ResultDto> {
        return this.rawMeasurementService.defaultMessage();
    }

    @Post('/bundle')
    @HttpCode(HttpStatus.CREATED)
    createMany(@Body() bundleDto: RawMeasurementBundleDto): Promise<ResultDto> {
        return this.rawMeasurementService.createAsBundle(bundleDto);
    }

}
