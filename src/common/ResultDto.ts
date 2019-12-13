import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import {DEFAULT, DEFAULT_MSG} from '../config/constants';

export class ResultDto {

    @ApiModelProperty()
    status: string;

    @ApiModelProperty()
    message: string;

    @ApiModelProperty()
    data: any;

    defaultStatus() {
        this.status = DEFAULT;
        this.message = DEFAULT_MSG;
        return this;
    }
}
