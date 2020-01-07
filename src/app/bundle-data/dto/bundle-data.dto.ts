import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class BundleDataDto {

    @ApiModelProperty()
    bundledDataType: string;

    @ApiModelProperty()
    locationId: string;

    @ApiModelProperty({type: Array})
    dataPackets: [];

}
