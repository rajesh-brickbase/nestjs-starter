import {Module} from '@nestjs/common';
import {DefaultController} from './default.controller';
import {DefaultService} from './default.service';

@Module({
    providers: [DefaultService],
    controllers: [DefaultController],
})
export class DefaultModule {
}
