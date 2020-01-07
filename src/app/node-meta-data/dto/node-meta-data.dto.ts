import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class NodeMetaDataDto {

    @ApiModelProperty()
    unixTimestamp: string;

    @ApiModelProperty()
    nodeMacId: string;

    @ApiModelProperty()
    measurementType: string;

    @ApiModelProperty()
    measurementValue: string;

}
