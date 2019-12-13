import { Test, TestingModule } from '@nestjs/testing';
import {RawMeasurementController} from '../../src/app/raw-measurement/raw-measurement.controller';

describe('RawMeasurement Controller', () => {
  let controller: RawMeasurementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RawMeasurementController],
    }).compile();

    controller = module.get<RawMeasurementController>(RawMeasurementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
