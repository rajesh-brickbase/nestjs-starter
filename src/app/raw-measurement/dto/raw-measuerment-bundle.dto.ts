import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import {RawMeasurementDto} from './raw-measurement.dto';

export class RawMeasurementBundleDto {

    @ApiModelProperty()
    bundledDataType: string;

    @ApiModelProperty({type: [RawMeasurementDto]})
    dataPackets: RawMeasurementDto[];

}
