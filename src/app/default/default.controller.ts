import {Controller, Get, HttpCode, HttpStatus} from '@nestjs/common';
import {DefaultService} from './default.service';
import {ApiTags} from '@nestjs/swagger';

@Controller()
@ApiTags('Default')
export class DefaultController {

    constructor(private readonly appService: DefaultService) {
    }

    @Get('/index')
    @HttpCode(HttpStatus.OK)
    getHello(): string {
        return this.appService.getHello();
    }

}
