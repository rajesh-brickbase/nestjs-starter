import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class NodeSignalDto {
    @ApiModelProperty()
    readonly id: string;
    @ApiModelProperty()
    readonly firstName: string;
}
