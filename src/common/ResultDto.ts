import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import {DEFAULT, DEFAULT_MSG, ERROR, SUCCESS, SUCCESS_MSG} from '../config/constants';

export class ResultDto {

    @ApiModelProperty()
    status: string;

    @ApiModelProperty()
    statusCode: string;

    @ApiModelProperty()
    message: string;

    @ApiModelProperty()
    data: any;

    defaultStatus() {
        this.status = DEFAULT;
        this.message = DEFAULT_MSG;
        return this;
    }

    errorMessage(errorMessage) {
        this.status = ERROR;
        this.message = errorMessage;
        return this;
    }

    successMessage(message, data){
        this.message = message;
        this.status = SUCCESS;
        this.data =  data;
        return this;
    }
}
