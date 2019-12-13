import {Module} from '@nestjs/common';
import {RawMeasurementController} from './raw-measurement.controller';
import {RawMeasurementService} from './raw-measurement.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RawMeasurement} from './raw-measurement.entity';
import {RawMeasurementRepository} from './raw-measurement.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([RawMeasurement, RawMeasurementRepository]),
  ],
  controllers: [RawMeasurementController],
  providers: [RawMeasurementService],
})
export class RawMeasurementModule {}
