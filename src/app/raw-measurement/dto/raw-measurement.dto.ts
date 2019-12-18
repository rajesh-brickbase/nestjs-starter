import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class RawMeasurementDto {

    @ApiModelProperty()
    timestamp: string;

    @ApiModelProperty()
    srcMacId: string;

    @ApiModelProperty()
    streamIndex: string;

    @ApiModelProperty()
    positionId: string;

    @ApiModelProperty()
    measurementType: string;

    @ApiModelProperty()
    measurementValue: string;

    timestampAsISO: string;

    value: string;

}
